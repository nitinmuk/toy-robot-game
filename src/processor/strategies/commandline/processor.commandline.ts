import {
  ProcessorStrategyType,
  ProcessorStrategy,
  RobotStatus,
  UserPlaceAction,
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
      const updatedRobotStatus = actionProcessor?.processor(
        requestedRobotStatus ?? currentRobotStatus
      );
      currentRobotStatus = updatedRobotStatus ?? currentRobotStatus;
    }
  },
};

export default commandlineProcessor;
