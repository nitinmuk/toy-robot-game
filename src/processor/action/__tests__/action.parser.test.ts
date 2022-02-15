import * as data from './test.data';
import sut from '../action.parser';

describe('action.parser', () => {
  it('must successfully parse and map all parsable actions', () => {
    for (const parsableAction of data.parsableActions) {
      // Given
      const actionString = parsableAction.action;
      const expectedResponse = parsableAction.outcome;

      // When
      const actualResponse = sut(actionString);

      // Then
      expect(actualResponse).toEqual(expectedResponse);
    }
  });
  it('must return undefined when given action string format not valid', () => {
    for (const nonParsableAction of data.nonParsableActions) {
      // When
      const nonParsableString = nonParsableAction as string;
      const actualResponse = sut(nonParsableString);

      // Then
      expect(actualResponse).toBeUndefined();
    }
  });
});
