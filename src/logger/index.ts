import Bunyan from 'bunyan';

const bunyanOptions = {
  streams: [
    {
      type: 'file',
      path: './application.log',
    },
  ],
};

export default (name: string) => {
  return Bunyan.createLogger({ ...bunyanOptions, name });
};
