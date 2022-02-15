export enum InputStrategyType {
  COMMAND_LINE = 'commandline',
}
export interface InputStrategy {
  type: `${InputStrategyType}`;
  readInput: (inputProcessor: (input: string) => void) => void;
  closeInput: () => void;
}
