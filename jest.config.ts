import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)',
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  setupFiles: ['./jest.setup.ts'],
  clearMocks: true,
  errorOnDeprecated: true,
  notify: true,
  notifyMode: 'failure',
  coverageProvider: 'babel',
  collectCoverageFrom: ['src/**/*.[jt]s?(x)'],
};

export default config;
