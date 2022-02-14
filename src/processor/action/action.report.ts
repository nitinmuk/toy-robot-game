import { RobotStatus } from '../processor.types';

export default (currentRobotStatus?: RobotStatus) => {
  if (currentRobotStatus) {
    const { x, y, orientation } = currentRobotStatus;
    console.log(`Output: ${x},${y},${orientation}`);
  }
};
