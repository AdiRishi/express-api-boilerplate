import process from 'process';
import config from './config'; // import config first to set NODE_ENV
import express from 'express';
import helmet from 'helmet';
import { createHttpTerminator } from 'http-terminator';
import Logger, { initApp } from './utils/logging';
import ApiModuleWrapper from './api-routes';

const app = express();

ApiModuleWrapper(app);
initApp(app);
app.use(helmet());

const server = app.listen(config.port, config.host, () => {
  Logger.info(`express-js-template is listening at http://${config.host}:${config.port}`);
});

const httpTerminator = createHttpTerminator({
  server,
});

process.on('SIGTERM', async () => {
  await httpTerminator.terminate();
});
