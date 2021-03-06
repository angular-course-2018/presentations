module.exports = {
  testURL: 'http://localhost',
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/setup-jest.ts',
  roots: [ 'projects'],
  collectCoverageFrom: [
    '**/*.ts',
    '!**/*.module.ts',
    '!**/app.routing.ts',
    '!**/*.d.ts',
    '!src/setupJest.ts',
    '!src/app/models/*'
  ]
};
