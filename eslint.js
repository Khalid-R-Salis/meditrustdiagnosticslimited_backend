module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: "module",
  },
  ignorePatterns: ["/lib/**/*"],
  plugins: ["@typescript-eslint"],
  rules: {
    "linebreak-style": 0,
    "import/no-unresolved": 0,
    "indent": 0,
    "no-trailing-spaces": 0,
    "eol-last": 0,
    '@typescript-eslint/no-var-requires': 0,
    "camelcase": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": 0
  },
};