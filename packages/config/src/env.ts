import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().min(1).optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
});

export type AppEnv = z.infer<typeof envSchema>;

let cached: AppEnv | undefined;

export function getEnv(): AppEnv {
  if (cached) return cached;

  const parsed = envSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  });

  if (!parsed.success) {
    const details = parsed.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("; ");
    throw new Error(`Invalid environment variables: ${details}`);
  }

  cached = parsed.data;
  return cached;
}

export function requireDatabaseUrl(): string {
  const url = getEnv().DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is required for database operations. Copy .env.example to .env and start Postgres.",
    );
  }
  return url;
}

export function resetEnvCache(): void {
  cached = undefined;
}
