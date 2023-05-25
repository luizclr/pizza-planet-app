module.exports = {
  verbose: true,
  preset: "react-native",
  roots: ["<rootDir>/tests"],
  setupFiles: ["./tests/setup-envs.js"],
  setupFilesAfterEnv: ["./tests/setup.js"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  testMatch: ["<rootDir>/tests/**/*.{spec,test}.{ts,tsx}"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
    "^#/(.*)$": "<rootDir>/tests/$1",
  },
};
