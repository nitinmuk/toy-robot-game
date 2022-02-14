import config from '../../config';
import { RobotStatus, RobotOrientation } from '../processor.types';

export default (currentRobotStatus?: RobotStatus): RobotStatus | undefined => {
  if (currentRobotStatus) {
    const { x, y, orientation } = currentRobotStatus;
    const {
      GAME_TABLE_X_MAX,
      GAME_TABLE_Y_MAX,
      GAME_TABLE_X_MIN,
      GAME_TABLE_Y_MIN,
    } = config;
    let newX;
    let newY;
    switch (orientation) {
      case RobotOrientation.NORTH:
        newY = y + 1 <= GAME_TABLE_Y_MAX ? y + 1 : y;
        break;
      case RobotOrientation.SOUTH:
        newY = y - 1 >= GAME_TABLE_Y_MIN ? y - 1 : y;
        break;
      case RobotOrientation.EAST:
        newX = x + 1 <= GAME_TABLE_X_MAX ? x + 1 : x;
        break;
      case RobotOrientation.WEST:
        newX = x - 1 >= GAME_TABLE_X_MIN ? x - 1 : x;
    }
    return { ...currentRobotStatus, x: newX ?? x, y: newY ?? y };
  }
};
