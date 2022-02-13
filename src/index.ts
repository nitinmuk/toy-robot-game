import { InputStrategyType, inputStrategyFactory } from './input';
import { ProcessorStrategyType, processorStrategyFactory } from './processor';
import config from './config';

const { currentProcessorStrategy, currentInputStrategy } = config;

const initializeReadInput = async (
  inputstrategyType: InputStrategyType,
  inputListener: (input: string) => void
) => {
  const inputStrategyInstance = await inputStrategyFactory(inputstrategyType);
  inputStrategyInstance.readInput(inputListener);
};

const getProcessor = async (processorStrategyType: ProcessorStrategyType) => {
  return processorStrategyFactory(processorStrategyType);
};

async function playGame() {
  console.log('Press ctrl+c to quit');
  const processor = await getProcessor(currentProcessorStrategy);
  initializeReadInput(currentInputStrategy, processor.processUserAction);
}

playGame();
