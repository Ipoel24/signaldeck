import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { requireDatabaseUrl } from "@signaldeck/config";
import * as schema from "./schema";

type Db = ReturnType<typeof drizzle<typeof schema>>;

let sql: ReturnType<typeof postgres> | undefined;
let db: Db | undefined;

export function getDb(): Db {
  if (db) return db;
  const url = requireDatabaseUrl();
  sql = postgres(url, { max: 10 });
  db = drizzle(sql, { schema });
  return db;
}

export async function closeDb(): Promise<void> {
  if (sql) {
    await sql.end();
  }
  sql = undefined;
  db = undefined;
}
