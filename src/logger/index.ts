import Bunyan from 'bunyan';

const bunyanOptions = {
  streams: [
    {
      type: 'file',
      path: './application.log',
    },
  ],
};

export default function (name: string) {
  return Bunyan.createLogger({ ...bunyanOptions, name });
}
