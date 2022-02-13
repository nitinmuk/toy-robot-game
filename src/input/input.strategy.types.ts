export enum InputStrategyType {
  COMMAND_LINE = 'commandline',
}

export interface InputStrategy {
  type: `${InputStrategyType}`;
  readInput: (inputListener: (input: string) => void) => Promise<void>;
  closeInput: () => void;
}
