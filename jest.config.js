// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/**/*.(ts|tsx)",
    "!**/node_modules/**",
    "!**/index.(js|ts)",
    "!**/*.stories.*",
    "!**/types?(.ts)",
    "!**/dist/**",
  ],
  coverageThreshold: {
    global: {
      lines: 70,
      branches: 70,
      functions: 80,
      statements: -10,
    },
  },
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts", "tsx"],
  testMatch: ["**/__tests__/*.+(ts|tsx)", "**/*.test.(ts|tsx)"],
};
