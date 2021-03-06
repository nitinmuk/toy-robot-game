import {
  ProcessorStrategyType,
  ProcessorStrategy,
  RobotStatus,
  UserPlaceAction,
  UserFindPathAction,
} from '../../processor.types';
import actionParser from '../../action/action.parser';
import userActionProcessors from '../../user.action.processor';

let currentRobotStatus: RobotStatus | undefined;

const commandlineProcessor: ProcessorStrategy = {
  type: ProcessorStrategyType.COMMAND_LINE,
  actionParser,
  userActionProcessors,
  processUserAction: (action: string) => {
    const userAction = actionParser(action);
    if (userAction) {
      const actionProcessor = userActionProcessors.find(
        (userActionProcessor) =>
          userActionProcessor.userAction === userAction.action
      );
      const requestedRobotStatus = (userAction as UserPlaceAction).robotStatus;
      const destination = (userAction as UserFindPathAction).destination;
      const updatedRobotStatus = actionProcessor?.processor({
        robotStatus: requestedRobotStatus ?? currentRobotStatus,
        destination,
      });
      currentRobotStatus = updatedRobotStatus ?? currentRobotStatus;
    }
  },
};

export default commandlineProcessor;
