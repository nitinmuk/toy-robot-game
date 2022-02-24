import config from '../config';

export const isObstacle = (position: { x: number; y: number }) => {
  const {
    GAME_TABLE_X_MIN,
    GAME_TABLE_X_MAX,
    GAME_TABLE_Y_MIN,
    GAME_TABLE_Y_MAX,
    GAME_TABLE_OBSTACLES,
  } = config;
  const { x, y } = position;
  if (
    x < GAME_TABLE_X_MIN ||
    x > GAME_TABLE_X_MAX ||
    y < GAME_TABLE_Y_MIN ||
    y > GAME_TABLE_Y_MAX
  ) {
    return true;
  }
  const obstacle = GAME_TABLE_OBSTACLES?.find(
    (obstaclePoint) => obstaclePoint.x === x && obstaclePoint.y === y
  );
  return obstacle ? true : false;
};
