import winston, { LoggerOptions } from 'winston';
import morgan from 'morgan';
import config from '../config';
import { InitApp } from './util-types';

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => `${info.timestamp} ${info.level} ${info.message}`)
);

const logOptions: LoggerOptions = {
  level: config.environment === 'development' ? 'silly' : 'warn',
  levels: winston.config.npm.levels,
  transports: [new winston.transports.Console()],
  format: logFormat,
};

const Logger = winston.createLogger(logOptions);

export const initApp: InitApp = (app) => {
  app.use(morgan('short'));
};

export default Logger;
