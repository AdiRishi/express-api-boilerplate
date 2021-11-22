import { Router } from 'express';
import { RouteModuleWrapper } from '../route';
import PingModuleWrapper from './ping';

const healthcheckRouter = Router();

const healthcheckWrapper: RouteModuleWrapper = (appRouter) => {
    PingModuleWrapper(healthcheckRouter);
    appRouter.use('/healthcheck', healthcheckRouter);
}

export default healthcheckWrapper;