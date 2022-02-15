import rewire from 'rewire';
import sinon from 'sinon';
import * as actionParserModule from '../../../action/action.parser';
import * as actionMoveModule from '../../../action/action.move';
import { UserCommand } from '../../../processor.types';
import * as userActionProcessors from '../../../user.action.processor';
import processor from '../processor.commandline';

describe('processor.commandline', () => {
  let stubActionParser: sinon.SinonStub;
  let stubActionMove: sinon.SinonStub;
  beforeEach(() => {
    stubActionParser = sinon.stub(actionParserModule, 'default');
    stubActionMove = sinon.stub(actionMoveModule, 'default');
    const stubbedUserActionProcessors = [
      { userAction: UserCommand.MOVE, processor: stubActionMove },
    ];
    sinon
      .stub(userActionProcessors, 'default')
      .value(stubbedUserActionProcessors);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('processUserAction', () => {
    const robotStatus = { x: 1, y: 2, orientation: 'NORTH' };
    it('must process given command and update currentRobotStatus', () => {
      const processorModule = rewire('../processor.commandline');
      const sut = processorModule.__get__(
        'commandlineProcessor'
      ).processUserAction;

      // Given
      const action = 'MOVE';
      processorModule.__set__('currentRobotStatus', robotStatus);
      const expectedResponse = { ...robotStatus, y: robotStatus.y + 1 };

      // When
      sut(action);

      // Then
      expect(processorModule.__get__('currentRobotStatus')).toEqual(
        expectedResponse
      );
    });

    it('must parse given command using actionParser', () => {
      // Given
      const action = 'fake command';
      stubActionParser.returns(undefined);
      const sut = processor.processUserAction;

      // When
      sut(action);

      // Then
      sinon.assert.calledOnceWithExactly(stubActionParser, action);
    });

    it('must find and execute processor for given action', () => {
      // Given
      const action = 'MOVE';
      stubActionParser.returns({ action: 'MOVE' });
      const sut = processor.processUserAction;

      // When
      sut(action);

      // Then
      sinon.assert.calledOnce(stubActionMove);
    });
  });
});
