import { ActionProcessorData, Node } from '../processor.types';
import { isObstacle } from '../obstacle';

//@TODO need to add test cases
const displayRobotPath = (traversedNodes: Node[]) => {
  if (traversedNodes.length === 1) {
    console.log(
      `Robot current position is same as requested destination i.e. (${traversedNodes[0].position.x}, ${traversedNodes[0].position.y})`
    );
    return;
  }
  let robotPath = '';
  let traversedNode: Node | undefined =
    traversedNodes[traversedNodes.length - 1];
  while (traversedNode?.previousPosition !== null) {
    robotPath = `(${traversedNode?.position.x}, ${traversedNode?.position.y}) ${
      robotPath ? '-> ' + robotPath : robotPath
    }`;
    traversedNode = traversedNodes.find(
      (node) =>
        node.position.x === traversedNode?.previousPosition?.x &&
        node.position.y === traversedNode.previousPosition.y
    );
  }
  robotPath = `(${traversedNode?.position.x}, ${traversedNode?.position.y}) -> ${robotPath}`;
  console.log(`path is: ${robotPath}`);
};

const prepareNonObstacleEdges = (currentNode: Node) => {
  return [
    {
      position: {
        x: currentNode.position.x + 1,
        y: currentNode.position.y,
      },
      previousPosition: currentNode.position,
    },
    {
      position: {
        x: currentNode.position.x - 1,
        y: currentNode.position.y,
      },
      previousPosition: currentNode.position,
    },
    {
      position: {
        x: currentNode.position.x,
        y: currentNode.position.y + 1,
      },
      previousPosition: currentNode.position,
    },
    {
      position: {
        x: currentNode.position.x,
        y: currentNode.position.y - 1,
      },
      previousPosition: currentNode.position,
    },
  ].filter((edge) => !isObstacle(edge.position));
};

export default (processorData: ActionProcessorData): void => {
  const { robotStatus, destination } = processorData;
  if (!robotStatus || !destination) {
    return;
  }
  if (isObstacle(destination)) {
    console.log('Invalid destination');
    return;
  }
  const { x, y } = robotStatus;
  const currentRobotStatusNode = { position: { x, y }, previousPosition: null };
  const queuedNodes: Node[] = [currentRobotStatusNode];
  const exploredNodes: Node[] = [currentRobotStatusNode];
  const traversedNodes: Node[] = [];

  while (queuedNodes.length) {
    const currentNode = queuedNodes.shift();
    if (currentNode) {
      traversedNodes.push(currentNode);
      if (
        currentNode.position.x === destination.x &&
        currentNode.position.y === destination.y
      ) {
        displayRobotPath(traversedNodes);
        return;
      }
      const nonObstacleEdges = prepareNonObstacleEdges(currentNode);
      nonObstacleEdges.forEach((nonObstacleEdge) => {
        if (
          !exploredNodes.find(
            (node) =>
              node.position.x === nonObstacleEdge.position.x &&
              node.position.y === nonObstacleEdge.position.y
          )
        ) {
          queuedNodes.push(nonObstacleEdge);
          exploredNodes.push(nonObstacleEdge);
        }
      });
    }
  }
  console.log('path not found');
  return;
};
