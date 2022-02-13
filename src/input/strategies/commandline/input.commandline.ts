import readline from 'readline';
import createLogger from '../../../logger';
import { InputStrategyType, InputStrategy } from '../../input.strategy.types';

const logger = createLogger('input.commandline');
let rl: readline.Interface;

// @TODO keep rl open and expose a generic function to close stream
const commandlineStrategy: InputStrategy = {
  type: InputStrategyType.COMMAND_LINE,
  readInput: async (inputListener: (input: string) => void) => {
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    try {
      rl.on('line', inputListener);
      rl.question('', inputListener);
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
