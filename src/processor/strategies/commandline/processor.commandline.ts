import {
  ProcessorStrategyType,
  ProcessorStrategy,
  UserCommand,
  RobotStatus,
  UserPlaceAction,
} from '../../processor.types';
import {
  actionParser,
  executeLeftAction,
  executeMoveAction,
  executePlaceAction,
  executeRightAction,
  displayOutput,
} from './commandline.helper';

let currentRobotStatus: RobotStatus | undefined;

const commandlineProcessorStrategy: ProcessorStrategy = {
  type: ProcessorStrategyType.COMMAND_LINE,
  actionParser,
  displayOutput,
  processUserAction: function (action: string) {
    const userAction = actionParser(action);
    if (userAction) {
      switch (userAction.action) {
        case UserCommand.PLACE: {
          const placeAction = userAction as UserPlaceAction;
          currentRobotStatus = executePlaceAction(
            placeAction.robotStatus,
            currentRobotStatus
          );
          break;
        }
        case UserCommand.LEFT:
          currentRobotStatus = executeLeftAction(currentRobotStatus);
          break;

        case UserCommand.RIGHT:
          currentRobotStatus = executeRightAction(currentRobotStatus);
          break;

        case UserCommand.MOVE:
          currentRobotStatus = executeMoveAction(currentRobotStatus);
          break;

        case UserCommand.REPORT:
          displayOutput(currentRobotStatus);
          break;
      }
    }
  },
};

export default commandlineProcessorStrategy;
