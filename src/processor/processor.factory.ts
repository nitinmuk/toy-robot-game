import createLogger from '../logger';
import { ProcessorStrategy, ProcessorStrategyType } from './processor.types';

const logger = createLogger('input.strategy.factory');

const ProcessorStrategyFactory = async (
  processorStrategyType: ProcessorStrategyType
) => {
  let processorStrategy: ProcessorStrategy;
  try {
    const inputStrategyModule = await import(
      `./strategies/${processorStrategyType}/processor.${processorStrategyType}`
    );
    processorStrategy = inputStrategyModule.default;
  } catch (error) {
    logger.error(
      { processorStrategyType },
      'Failed to find given processor strategy type module'
    );
    throw error;
  }
  return processorStrategy;
};

export default ProcessorStrategyFactory;
