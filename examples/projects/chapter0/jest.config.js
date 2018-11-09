module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)+(spec|test).ts?(x)',
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  preset: 'ts-jest',
}
