import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)$": "<roorDir>/src/$1",
  },
};

export default config;
