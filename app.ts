import config from './config'; // import config first to set NODE_ENV
import express from 'express';
import Logger, { initApp } from './utils/logging';
import ApiModuleWrapper from './api-routes';

const app = express();

ApiModuleWrapper(app);
initApp(app);

app.listen(config.port, config.host, () => {
  Logger.info(`express-js-template is listening at http://${config.host}:${config.port}`);
});
