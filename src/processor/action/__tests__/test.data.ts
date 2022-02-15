export const parsableActions = [
  {
    action: 'PLACE 1,3,NORTH',
    outcome: {
      action: 'PLACE',
      robotStatus: { x: 1, y: 3, orientation: 'NORTH' },
    },
  },
  {
    action: 'PLACE 1,1,SOUTH',
    outcome: {
      action: 'PLACE',
      robotStatus: { x: 1, y: 1, orientation: 'SOUTH' },
    },
  },
  {
    action: 'PLACE 23,2,WEST',
    outcome: {
      action: 'PLACE',
      robotStatus: { x: 23, y: 2, orientation: 'WEST' },
    },
  },
  {
    action: 'PLACE 23,2,EAST',
    outcome: {
      action: 'PLACE',
      robotStatus: { x: 23, y: 2, orientation: 'EAST' },
    },
  },
  {
    action: 'MOVE',
    outcome: { action: 'MOVE' },
  },
  {
    action: 'LEFT',
    outcome: { action: 'LEFT' },
  },
  {
    action: 'RIGHT',
    outcome: { action: 'RIGHT' },
  },
  {
    action: 'REPORT',
    outcome: { action: 'REPORT' },
  },
];

export const nonParsableActions = [
  null,
  undefined,
  1234,
  'null',
  '!@#$and',
  '1234',
  'PLACE 123',
  'MOVE 1,2,3',
  'xyz',
  'place 1,2,nor',
  'place 1w,2,north',
  'place 1,2w,east',
  'PLACE 1W,2W,NORTH',
  'MOV',
  'LEF',
  'RIHT',
  'PLACE12NORTH',
];
