import Logger from 'bunyan';
import { InputStrategyType, InputStrategy } from './input.strategy.types';

const logger = Logger.createLogger({ name: 'input.strategy.factory' });

const inputStrategyFacotry = async (inputStrategyType: InputStrategyType) => {
  let inputStrategy: InputStrategy;
  try {
    const inputStrategyModule = await import(
      `./strategies/${inputStrategyType}`
    );
    inputStrategy = inputStrategyModule.default;
  } catch (error) {
    logger.error(
      { inputStrategyType },
      'Failed to find given Input Strategy Type module'
    );
    throw error;
  }
  return inputStrategy;
};

export default inputStrategyFacotry;
