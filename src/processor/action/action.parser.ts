import {
  RobotOrientation,
  UserAction,
  UserCommand,
  UserPlaceAction,
} from '../processor.types';
import createLogger from '../../logger';

const logger = createLogger('action.parser');

export default (input: string): UserAction | undefined => {
  const inputRegularExpression = /\w+\s*\d*,*\d*,*\w*/;
  const validActionFormat =
    typeof input === 'string' && input.match(inputRegularExpression);
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
        if (userPlaceAction?.[0]?.toUpperCase() === UserCommand.PLACE) {
          const position = userPlaceAction?.[1]?.split(',');
          let orientation: RobotOrientation;
          const givenOrientation = position?.[2]?.toUpperCase();
          switch (givenOrientation) {
            case RobotOrientation.EAST:
            case RobotOrientation.WEST:
            case RobotOrientation.NORTH:
            case RobotOrientation.SOUTH:
              orientation = givenOrientation;
              break;
            default:
              logger.warn({ input }, 'invalid user action');
              return;
          }
          const givenX = parseInt(position?.[0]);
          const givenY = parseInt(position?.[1]);
          const givenUserPlaceAction: UserPlaceAction = {
            action: UserCommand.PLACE,
            robotStatus: {
              x: givenX,
              y: givenY,
              orientation,
            },
          };
          return givenUserPlaceAction;
        }
      }
    }
  }
  logger.warn({ input }, 'invalid user action');
};
