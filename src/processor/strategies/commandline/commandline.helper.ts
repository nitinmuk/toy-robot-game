import {
  GAME_TABLE_X_MAX,
  GAME_TABLE_Y_MAX,
  GAME_TABLE_X_ORIGIN,
  GAME_TABLE_Y_ORIGIN,
} from '../../processor.constant';
import {
  RobotOrientation,
  RobotStatus,
  UserAction,
  UserCommand,
} from '../../processor.types';

export const actionParser = (input: string): UserAction | undefined => {
  const inputRegularExpression = /\w+\s*\d*,*\d*,*\w*/;
  const validActionFormat = input.match(inputRegularExpression);
  if (validActionFormat) {
    const action = validActionFormat[0].trim().toUpperCase();

    switch (action) {
      case UserCommand.LEFT:
      case UserCommand.RIGHT:
      case UserCommand.MOVE:
      case UserCommand.REPORT:
        return {
          action,
        };
      default: {
        const userPlaceAction = action?.split(' ');
        if (userPlaceAction?.[0] === UserCommand.PLACE) {
          const position = userPlaceAction?.[1]?.split(',');
          let orientation: RobotOrientation;
          switch (position?.[2]) {
            case RobotOrientation.EAST:
            case RobotOrientation.WEST:
            case RobotOrientation.NORTH:
            case RobotOrientation.SOUTH:
              orientation = position?.[2];
              break;
            default:
              return;
          }
          return {
            action: userPlaceAction[0],
            robotStatus: {
              x: parseInt(position[0]),
              y: parseInt(position[1]),
              orientation,
            },
          };
        }
      }
    }
  }
};

export const executePlaceAction = (
  requestedRobotStatus: RobotStatus,
  currentRobotStatus?: RobotStatus
): RobotStatus | undefined => {
  const { x, y } = requestedRobotStatus;
  if (
    x >= GAME_TABLE_X_ORIGIN &&
    x <= GAME_TABLE_X_MAX &&
    y >= GAME_TABLE_Y_ORIGIN &&
    y <= GAME_TABLE_Y_MAX
  ) {
    return requestedRobotStatus;
  }
  return currentRobotStatus;
};

export const executeMoveAction = (
  currentRobotStatus?: RobotStatus
): RobotStatus | undefined => {
  if (currentRobotStatus) {
    const { x, y, orientation } = currentRobotStatus;
    let newX;
    let newY;
    switch (orientation) {
      case RobotOrientation.NORTH:
        newY = y + 1 <= GAME_TABLE_Y_MAX ? y + 1 : y;
        break;
      case RobotOrientation.SOUTH:
        newY = y - 1 >= GAME_TABLE_Y_ORIGIN ? y - 1 : y;
        break;
      case RobotOrientation.EAST:
        newX = x + 1 <= GAME_TABLE_X_MAX ? x + 1 : x;
        break;
      case RobotOrientation.WEST:
        newX = x - 1 >= GAME_TABLE_X_ORIGIN ? x - 1 : x;
    }
    return { ...currentRobotStatus, x: newX ?? x, y: newY ?? y };
  }
};

export const executeLeftAction = (
  currentRobotStatus?: RobotStatus
): RobotStatus | undefined => {
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

export const executeRightAction = (
  currentRobotStatus?: RobotStatus
): RobotStatus | undefined => {
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

export const displayOutput = (currentRobotStatus?: RobotStatus) => {
  if (currentRobotStatus) {
    const { x, y, orientation } = currentRobotStatus;
    console.log(`Output: ${x},${y},${orientation}`);
  }
};
