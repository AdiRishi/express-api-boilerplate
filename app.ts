import process from 'process';
import config from './config'; // import config first to set NODE_ENV
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { createHttpTerminator } from 'http-terminator';
import Logger, { initApp } from './utils/logging';
import ApiModuleWrapper from './api-routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
ApiModuleWrapper(app);
initApp(app);

const server = app.listen(config.port, config.host, () => {
  Logger.info(`express-js-template is listening at http://${config.host}:${config.port}`);
});

const httpTerminator = createHttpTerminator({
  server,
});

process.on('SIGTERM', async () => {
  await httpTerminator.terminate();
});
