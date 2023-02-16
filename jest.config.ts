import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['<rootDir>/src/__tests__/components/__mocks__/'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@/(.*)$': '<roorDir>/src/$1',
    '^.+\\.(svg)$': '<rootDir>/src/__tests__/components/__mocks__/SvgrMock.tsx',
  },
  testEnvironment: 'jest-environment-jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
};

export default config;
