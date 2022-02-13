import type { Config } from "@jest/types";
const config: Config.InitialOptions = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.test.ts"],
  moduleFileExtensions: ["ts", "tsx", "json", "js", "jsx"],
};

export default config;
