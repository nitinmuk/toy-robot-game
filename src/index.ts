import Logger from 'bunyan';
import { InputStrategyType, inputStrategyFactory } from './inputStrategy';

const logger = Logger.createLogger({ name: 'play.game' });

const currentInputStrategy = InputStrategyType.COMMAND_LINE;

const takeInput = async (inputstrategyType: InputStrategyType) => {
  const inputStrategyInstance = await inputStrategyFactory(inputstrategyType);
  inputStrategyInstance.readInput((input) => console.log(`Received: ${input}`));
};

function playGame() {
  logger.info('starting the game');
  takeInput(currentInputStrategy);
}

playGame();
