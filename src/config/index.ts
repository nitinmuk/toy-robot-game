import { InputStrategyType } from '../input';
import { ProcessorStrategyType } from '../processor';
import { Position } from '../processor/processor.types';

const GAME_TABLE_OBSTACLES: Position[] = [
  { x: 3, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 1 },
];

const config = {
  currentInputStrategy: InputStrategyType.COMMAND_LINE,
  currentProcessorStrategy: ProcessorStrategyType.COMMAND_LINE,
  GAME_TABLE_X_MAX: 5,
  GAME_TABLE_X_MIN: 0,
  GAME_TABLE_Y_MAX: 5,
  GAME_TABLE_Y_MIN: 0,
  GAME_TABLE_OBSTACLES,
};

export default config;
