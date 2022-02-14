import { ProcessorStrategy } from '../processor/processor.types';

export enum InputStrategyType {
  COMMAND_LINE = 'commandline',
}

export interface InputStrategy {
  type: `${InputStrategyType}`;
  readInput: (processorStrategy: ProcessorStrategy) => void;
  closeInput: () => void;
}
