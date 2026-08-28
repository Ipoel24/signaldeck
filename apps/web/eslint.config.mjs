import next from "eslint-config-next";

const nextConfig = Array.isArray(next) ? next : next.default ?? next;

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [".next/**", "node_modules/**"],
  },
];

export default eslintConfig;
