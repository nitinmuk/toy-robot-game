import { RobotOrientation, RobotStatus } from '../../processor.types';
import sut from '../action.left';

describe('action.left', () => {
  const robotStatus: RobotStatus = {
    x: 1,
    y: 1,
    orientation: RobotOrientation.WEST,
  };
  it('must change orientation to WEST when orientation is NORTH', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      orientation: RobotOrientation.NORTH,
    };
    const expectedResponse = {
      ...robotStatus,
      orientation: RobotOrientation.WEST,
    };

    // When
    const newStatus = sut(currentStatus);

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });

  it('must change orientation to SOUTH when orientation is WEST', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      orientation: RobotOrientation.WEST,
    };
    const expectedResponse = {
      ...robotStatus,
      orientation: RobotOrientation.SOUTH,
    };

    // When
    const newStatus = sut(currentStatus);

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });

  it('must change orientation to EAST when orientation is SOUTH', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      orientation: RobotOrientation.SOUTH,
    };
    const expectedResponse = {
      ...robotStatus,
      orientation: RobotOrientation.EAST,
    };

    // When
    const newStatus = sut(currentStatus);

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });

  it('must change orientation to NORTH when orientation is EAST', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      orientation: RobotOrientation.EAST,
    };
    const expectedResponse = {
      ...robotStatus,
      orientation: RobotOrientation.NORTH,
    };

    // When
    const newStatus = sut(currentStatus);

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });
});
