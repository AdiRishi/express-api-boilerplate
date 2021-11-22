import { Router } from 'express';
import { RouteModuleWrapper } from '../route-types';
import PingModuleWrapper from './ping';

const healthcheckRouter = Router();

const healthcheckWrapper: RouteModuleWrapper = (appRouter) => {
  PingModuleWrapper(healthcheckRouter);
  appRouter.use('/healthcheck', healthcheckRouter);
};

export default healthcheckWrapper;
