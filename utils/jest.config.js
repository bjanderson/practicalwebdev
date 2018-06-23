module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js}'
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
    'json'
  ],

  setupTestFrameworkScriptFile: '<rootDir>/jest/setupJest.js',

  testPathIgnorePatterns: [
    'coverage/',
    'dist/',
    'jest/',
    'node_modules/',
    'scripts/'
  ],

  testRegex: "(\.)(spec)(\.)(js)$",

  testResultsProcessor: 'jest-sonar-reporter'
};
