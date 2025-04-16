// eslint-disable-next-line import/no-anonymous-default-export
export default {
  clearMocks: true,
  preset: "ts-jest",
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/index.tsx"],
  coverageReporters: ["json", "lcov", "text"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testEnvironment: "node",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!axios|query-string)"],
};
