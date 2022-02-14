import { UserActionProcessor, UserCommand } from './processor.types';

const userActionProcessors: UserActionProcessor[] = [];

for (const key of Reflect.ownKeys(UserCommand)) {
  const actionFunction =
    typeof key === 'string' &&
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require(`./action/action.${key.toLowerCase()}`).default;
  const userActionProcessor = {
    userAction: key as UserCommand,
    processor: actionFunction,
  };
  userActionProcessors.push(userActionProcessor);
}

export default userActionProcessors;
