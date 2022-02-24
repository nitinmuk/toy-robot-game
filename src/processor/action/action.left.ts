import {
  RobotStatus,
  RobotOrientation,
  ActionProcessorData,
} from '../processor.types';

export default (
  processorData: ActionProcessorData
): RobotStatus | undefined => {
  const { robotStatus } = processorData;
  if (robotStatus) {
    const { orientation } = robotStatus;
    let newOrientation = orientation;
    switch (robotStatus.orientation) {
      case RobotOrientation.NORTH:
        newOrientation = RobotOrientation.WEST;
        break;
      case RobotOrientation.SOUTH:
        newOrientation = RobotOrientation.EAST;
        break;
      case RobotOrientation.EAST:
        newOrientation = RobotOrientation.NORTH;
        break;
      case RobotOrientation.WEST:
        newOrientation = RobotOrientation.SOUTH;
    }
    return { ...robotStatus, orientation: newOrientation };
  }
};
