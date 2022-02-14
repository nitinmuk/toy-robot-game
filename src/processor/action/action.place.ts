import config from '../../config';
import { RobotStatus } from '../processor.types';

export default (requestedRobotStatus: RobotStatus): RobotStatus | undefined => {
  const {
    GAME_TABLE_X_MAX,
    GAME_TABLE_Y_MAX,
    GAME_TABLE_X_ORIGIN,
    GAME_TABLE_Y_ORIGIN,
  } = config;
  const { x, y } = requestedRobotStatus;
  if (
    x >= GAME_TABLE_X_ORIGIN &&
    x <= GAME_TABLE_X_MAX &&
    y >= GAME_TABLE_Y_ORIGIN &&
    y <= GAME_TABLE_Y_MAX
  ) {
    return requestedRobotStatus;
  }
  return;
};
