import readline from 'readline';
import { InputStrategyType, InputStrategy } from '../../input.types';

let rl: readline.Interface;

const commandlineStrategy: InputStrategy = {
  type: InputStrategyType.COMMAND_LINE,
  readInput: (processorFunction: (input: string) => void) => {
    rl = readline.createInterface({
      input: process.stdin,
      output: undefined,
    });
    rl.on('line', processorFunction);
    rl.question('', processorFunction);
  },
  closeInput: () => {
    return rl.close();
  },
};

export default commandlineStrategy;
