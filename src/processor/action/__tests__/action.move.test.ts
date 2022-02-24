import { RobotOrientation } from '../../processor.types';
import sut from '../action.move';
import config from '../../../config';
import { robotStatus } from './test.data';

describe('action.move', () => {
  it('must increase x by 1 when orientation is EAST', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      orientation: RobotOrientation.EAST,
    };
    const expectedResponse = {
      ...currentStatus,
      x: currentStatus.x + 1,
    };

    // When
    const newStatus = sut({
      robotStatus: currentStatus,
    });

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });

  it('must decrease x by 1 when orientation is WEST', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      orientation: RobotOrientation.WEST,
    };
    const expectedResponse = {
      ...currentStatus,
      x: currentStatus.x - 1,
    };

    // When
    const newStatus = sut({
      robotStatus: currentStatus,
    });

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });

  it('must increase y by 1 when orientation is NORTH', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      orientation: RobotOrientation.NORTH,
    };
    const expectedResponse = {
      ...currentStatus,
      y: currentStatus.y + 1,
    };

    // When
    const newStatus = sut({
      robotStatus: currentStatus,
    });

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });

  it('must decrease y by 1 when orientation is SOUTH', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      orientation: RobotOrientation.SOUTH,
    };
    const expectedResponse = {
      ...currentStatus,
      y: currentStatus.y - 1,
    };

    // When
    const newStatus = sut({
      robotStatus: currentStatus,
    });

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });

  it('must not increase y when y has max value and orientation is NORTH', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      y: config.GAME_TABLE_Y_MAX,
      orientation: RobotOrientation.NORTH,
    };
    const expectedResponse = currentStatus;

    // When
    const newStatus = sut({
      robotStatus: currentStatus,
    });

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });

  it('must not decrease y when y has min value and orientation is SOUTH', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      y: config.GAME_TABLE_Y_MIN,
      orientation: RobotOrientation.SOUTH,
    };
    const expectedResponse = currentStatus;

    // When
    const newStatus = sut({
      robotStatus: currentStatus,
    });

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });

  it('must not increase x when x has max value and orientation is EAST', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      x: config.GAME_TABLE_X_MAX,
      orientation: RobotOrientation.EAST,
    };
    const expectedResponse = currentStatus;

    // When
    const newStatus = sut({
      robotStatus: currentStatus,
    });

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });

  it('must not decrease x when x has min value and orientation is WEST', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      x: config.GAME_TABLE_X_MIN,
      orientation: RobotOrientation.WEST,
    };
    const expectedResponse = currentStatus;

    // When
    const newStatus = sut({
      robotStatus: currentStatus,
    });

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });
});
