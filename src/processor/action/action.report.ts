import { ActionProcessorData } from '../processor.types';

export default (processorData: ActionProcessorData): void => {
  const { robotStatus: currentRobotStatus } = processorData;
  if (currentRobotStatus) {
    const { x, y, orientation } = currentRobotStatus;
    console.log(`Output: ${x},${y},${orientation}`);
  }
};
