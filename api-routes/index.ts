import { Router } from 'express';
import { RouteModuleWrapper } from './route-types';
import HealthcheckModuleWrapper from './healthcheck';
import V1ModuleWrapper from './v1';

const apiRouter = Router();

const ApiModuleWrapper: RouteModuleWrapper = (app: Router) => {
  HealthcheckModuleWrapper(apiRouter);
  V1ModuleWrapper(apiRouter);
  app.use('/api', apiRouter);
};

export default ApiModuleWrapper;
