import { RobotOrientation } from '../../processor.types';
import sut from '../action.place';
import config from '../../../config';
import { robotStatus } from './test.data';

describe('action.place', () => {
  it('must return new status if it is valid', () => {
    // Given
    const requestedStatus = {
      ...robotStatus,
      orientation: RobotOrientation.NORTH,
    };
    const expectedResponse = requestedStatus;

    // When
    const newStatus = sut(requestedStatus);

    // Then
    expect(newStatus).toEqual(expectedResponse);
  });

  it('must return undefined if requested status has x more than max value', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      x: config.GAME_TABLE_X_MAX + 1,
      orientation: RobotOrientation.EAST,
    };

    // When
    const newStatus = sut(currentStatus);

    // Then
    expect(newStatus).toBeUndefined();
  });

  it('must return undefined if requested status has x less than minimum value', () => {
    // Given
    const requestedStatus = {
      ...robotStatus,
      x: config.GAME_TABLE_X_MIN - 1,
      orientation: RobotOrientation.WEST,
    };

    // When
    const newStatus = sut(requestedStatus);

    // Then
    expect(newStatus).toBeUndefined();
  });

  it('must return undefined if requested y is more than max', () => {
    // Given
    const requestedStatus = {
      ...robotStatus,
      y: config.GAME_TABLE_Y_MAX + 1,
    };

    // When
    const newStatus = sut(requestedStatus);

    // Then
    expect(newStatus).toBeUndefined();
  });

  it('must return undefined if requested status y has value less than min value', () => {
    // Given
    const currentStatus = {
      ...robotStatus,
      y: config.GAME_TABLE_Y_MIN - 1,
    };

    // When
    const newStatus = sut(currentStatus);

    // Then
    expect(newStatus).toBeUndefined();
  });
});
