import { RobotStatus, RobotOrientation } from '../processor.types';

export default (currentRobotStatus?: RobotStatus): RobotStatus | undefined => {
  if (currentRobotStatus) {
    const { orientation } = currentRobotStatus;
    let newOrientation = orientation;
    switch (currentRobotStatus.orientation) {
      case RobotOrientation.NORTH:
        newOrientation = RobotOrientation.EAST;
        break;
      case RobotOrientation.SOUTH:
        newOrientation = RobotOrientation.WEST;
        break;
      case RobotOrientation.EAST:
        newOrientation = RobotOrientation.SOUTH;
        break;
      case RobotOrientation.WEST:
        newOrientation = RobotOrientation.NORTH;
    }
    return { ...currentRobotStatus, orientation: newOrientation };
  }
};
