import {
  RobotStatus,
  RobotOrientation,
  ActionProcessorData,
} from '../processor.types';
import { isObstacle } from '../obstacle';

export default (
  processorData: ActionProcessorData
): RobotStatus | undefined => {
  const { robotStatus: currentRobotStatus } = processorData;
  if (!currentRobotStatus) {
    return;
  }
  const { x, y, orientation } = currentRobotStatus;
  let newX;
  let newY;
  switch (orientation) {
    case RobotOrientation.NORTH:
      newY = y + 1;
      break;
    case RobotOrientation.SOUTH:
      newY = y - 1;
      break;
    case RobotOrientation.EAST:
      newX = x + 1;
      break;
    case RobotOrientation.WEST:
      newX = x - 1;
  }
  if (isObstacle({ x: newX ?? x, y: newY ?? y })) {
    return currentRobotStatus;
  }
  return { ...currentRobotStatus, x: newX ?? x, y: newY ?? y };
};
