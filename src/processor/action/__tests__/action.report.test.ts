import sut from '../action.report';
import { robotStatus } from './test.data';

describe('action.report', () => {
  let consoleLogMock: jest.SpyInstance;

  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleLogMock.mockRestore();
  });

  it('must display robot current status', () => {
    // Given
    const displayString = `Output: ${robotStatus.x},${robotStatus.y},${robotStatus.orientation}`;

    // When
    sut(robotStatus);

    //Then
    expect(consoleLogMock).toHaveBeenCalledWith(displayString);
  });

  it('must not display if robot current status is undefined', () => {
    // Given
    const robotStatus = undefined;

    // When
    sut(robotStatus);

    //Then
    expect(consoleLogMock).not.toBeCalled();
  });
});
