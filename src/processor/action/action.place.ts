import { ActionProcessorData, RobotStatus } from '../processor.types';
import { isObstacle } from '../obstacle';

export default (
  processorData: ActionProcessorData
): RobotStatus | undefined => {
  const { robotStatus: requestedRobotStatus } = processorData;
  if (!requestedRobotStatus) {
    return;
  }
  const { x, y } = requestedRobotStatus;

  if (!isObstacle({ x, y })) {
    return requestedRobotStatus;
  }
  return;
};
