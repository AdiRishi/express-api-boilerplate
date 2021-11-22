import config from './config'; // import config first to set NODE_ENV
import express from 'express';
import ApiModuleWrapper from './api-routes';

const app = express();

ApiModuleWrapper(app);

app.listen(config.port, config.host, () => {
  console.log(`express-js-template is listening at http://${config.host}:${config.port}`);
});
