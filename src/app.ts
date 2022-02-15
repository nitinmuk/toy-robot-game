import { inputStrategyFactory } from './input';
import { processorStrategyFactory } from './processor';
import config from './config';

const { currentProcessorStrategy, currentInputStrategy } = config;

async function playGame() {
  const processor = await processorStrategyFactory(currentProcessorStrategy);
  const inputStrategy = await inputStrategyFactory(currentInputStrategy);
  inputStrategy.readInput(processor.processUserAction);
}

playGame();
