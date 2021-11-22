import { Router } from 'express';
import { RouteModuleWrapper } from './route';
import HealthcheckModuleWrapper from './healthcheck';

const apiRouter = Router();

const ApiModuleWrapper: RouteModuleWrapper = (app: Router) => {
  HealthcheckModuleWrapper(apiRouter);
  app.use('/api', apiRouter);
};

export default ApiModuleWrapper;
