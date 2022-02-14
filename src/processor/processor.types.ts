export enum ProcessorStrategyType {
  COMMAND_LINE = 'commandline',
}

export interface GameTable {
  x: number;
  y: number;
}

export enum UserCommand {
  PLACE = 'PLACE',
  MOVE = 'MOVE',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  REPORT = 'REPORT',
}

export enum RobotOrientation {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
}

export interface RobotStatus extends GameTable {
  orientation: `${RobotOrientation}`;
}

export interface UserPlaceAction {
  action: 'PLACE';
  robotStatus: RobotStatus;
}

export type UserAction =
  | UserPlaceAction
  | { action: Omit<UserCommand, 'PLACE'> };

export interface UserActionProcessor {
  userAction: UserCommand;
  processor: (robotStatus: RobotStatus) => RobotStatus | undefined | void;
}

export interface ProcessorStrategy {
  type: `${ProcessorStrategyType}`;
  processUserAction: (action: string) => void;
  actionParser: (input: string) => UserAction | undefined;
  userActionProcessors: UserActionProcessor[];
}
