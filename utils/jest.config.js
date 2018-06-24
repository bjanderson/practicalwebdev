module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts}'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    "json",
    "lcov",
    "text-summary"
  ],

  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'node'
  ],

  setupTestFrameworkScriptFile: '<rootDir>/jest/setupJest.ts',

  testPathIgnorePatterns: [
    '/coverage/',
    '/dist/',
    '/jest/',
    '/node_modules/',
    '/scripts/'
  ],

  testRegex: "(\.)(spec)(\.)(ts)$",

  testResultsProcessor: 'jest-sonar-reporter',

  transform: {
    "^.+\\.ts?$": "ts-jest",
  }
};
