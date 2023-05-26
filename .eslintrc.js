module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig-eslint.json",
  },
  plugins: ["react"],
  rules: {
    "no-console": "error",
    "import/extensions": [
      "error",
      "never",
      {
        svg: "always",
        styles: "always",
        png: "always",
      },
    ],
    "import/export": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    quotes: ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
    semi: ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    "max-lines-per-function": ["error", { max: 120 }],
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
    "no-restricted-imports": [2, { patterns: ["../*"] }],
    "no-restricted-modules": [2, { patterns: ["../*"] }],
    "@typescript-eslint/no-confusing-void-expression": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", "internal", "sibling", "unknown"],
        pathGroups: [
          { pattern: "~/**", group: "internal" },
          { pattern: "#/**", group: "sibling" },
        ],
      },
    ],
  },
};
