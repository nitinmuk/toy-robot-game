import readline from 'readline';
import { ProcessorStrategy } from '../../../processor/processor.types';
import { InputStrategyType, InputStrategy } from '../../input.types';

let rl: readline.Interface;

const commandlineStrategy: InputStrategy = {
  type: InputStrategyType.COMMAND_LINE,
  readInput: (processor: ProcessorStrategy) => {
    rl = readline.createInterface({
      input: process.stdin,
      output: undefined,
    });
    rl.on('line', processor.processUserAction);
    rl.question('', processor.processUserAction);
  },
  closeInput: () => {
    return rl.close();
  },
};

export default commandlineStrategy;
