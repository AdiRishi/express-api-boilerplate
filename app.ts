import process from 'process';
import config from './config'; // import config first to set NODE_ENV
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { createHttpTerminator } from 'http-terminator';
import Logger, { initApp as InitAppLogger } from './utils/logging';
import { initApp as InitSchemaValidationMiddleware } from './middleware/jsonschema-validator';
import ApiModuleWrapper from './api-routes';
import prisma from './utils/db';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
InitAppLogger(app);
ApiModuleWrapper(app);
InitSchemaValidationMiddleware(app);

const server = app.listen(config.port, config.host, () => {
  Logger.info(`express-js-template is listening at http://${config.host}:${config.port}`);
});

const httpTerminator = createHttpTerminator({
  server,
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  await httpTerminator.terminate();
});
