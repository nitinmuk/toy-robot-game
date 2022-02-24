export enum ProcessorStrategyType {
  COMMAND_LINE = 'commandline',
}

export interface Position {
  x: number;
  y: number;
}
export interface Node {
  position: Position;
  previousPosition: Position | null;
}

export enum UserCommand {
  PLACE = 'PLACE',
  MOVE = 'MOVE',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  REPORT = 'REPORT',
  FINDPATH = 'FINDPATH',
}

export enum RobotOrientation {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
}

export interface RobotStatus extends Position {
  orientation: `${RobotOrientation}`;
}

export interface UserPlaceAction {
  action: 'PLACE';
  robotStatus: RobotStatus;
}

export interface UserFindPathAction {
  action: 'FINDPATH';
  destination: Position;
}

export type UserAction =
  | UserPlaceAction
  | { action: Omit<UserCommand, 'PLACE'> }
  | UserFindPathAction;

export interface ActionProcessorData {
  robotStatus: RobotStatus | undefined;
  destination?: Position;
}
export interface UserActionProcessor {
  userAction: UserCommand;
  processor: (
    actionProcessorData: ActionProcessorData
  ) => RobotStatus | undefined | void;
}

export interface ProcessorStrategy {
  type: `${ProcessorStrategyType}`;
  processUserAction: (action: string) => void;
  actionParser: (input: string) => UserAction | undefined;
  userActionProcessors: UserActionProcessor[];
}
