import createLogger from '../logger';
import { InputStrategyType, InputStrategy } from './input.types';

const logger = createLogger('input.strategy.factory');

const inputStrategyFactory = async (inputStrategyType: InputStrategyType) => {
  let inputStrategy: InputStrategy;
  try {
    const inputStrategyModule = await import(
      `./strategies/${inputStrategyType}/input.${inputStrategyType}`
    );
    inputStrategy = inputStrategyModule.default;
  } catch (error) {
    logger.error(
      { inputStrategyType },
      'Failed to find given input strategy type module'
    );
    throw error;
  }
  return inputStrategy;
};

export default inputStrategyFactory;
