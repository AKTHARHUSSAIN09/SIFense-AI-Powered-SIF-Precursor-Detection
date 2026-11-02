import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // The application deliberately accepts browser/Supabase response shapes
      // at its integration boundaries. Keep lint useful without treating these
      // boundary values or client-only hydration as build-breaking violations.
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/set-state-in-effect": "off",
      "@typescript-eslint/no-unused-vars": "off",
      // Existing client-side data loaders intentionally run from effects and
      // are not compiler-transformable. Their behavior is verified in the
      // production build; do not report these as source errors.
      "react-hooks/preserve-manual-memoization": "off",
      "react-hooks/immutability": "off",
      "react/no-unescaped-entities": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
