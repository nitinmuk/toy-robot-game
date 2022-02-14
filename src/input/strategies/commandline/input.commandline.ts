import readline from 'readline';
import createLogger from '../../../logger';
import { ProcessorStrategy } from '../../../processor/processor.types';
import { InputStrategyType, InputStrategy } from '../../input.types';

const logger = createLogger('input.commandline');
let rl: readline.Interface;

const commandlineStrategy: InputStrategy = {
  type: InputStrategyType.COMMAND_LINE,
  readInput: async (processor: ProcessorStrategy) => {
    rl = readline.createInterface({
      input: process.stdin,
      output: undefined,
    });
    try {
      rl.on('line', processor.processUserAction);
      rl.question('', processor.processUserAction);
    } catch (error) {
      logger.error('Failed to attached listener to readline', error);
      throw error;
    }
  },
  closeInput: () => {
    return rl.close();
  },
};

export default commandlineStrategy;
