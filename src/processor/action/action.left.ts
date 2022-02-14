import { RobotStatus, RobotOrientation } from '../processor.types';

export default (currentRobotStatus?: RobotStatus): RobotStatus | undefined => {
  if (currentRobotStatus) {
    const { orientation } = currentRobotStatus;
    let newOrientation = orientation;
    switch (currentRobotStatus.orientation) {
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
    return { ...currentRobotStatus, orientation: newOrientation };
  }
};
