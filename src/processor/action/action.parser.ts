import { RobotOrientation, UserAction, UserCommand } from '../processor.types';

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
