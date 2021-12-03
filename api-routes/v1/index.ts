import { Router } from 'express';
import { RouteModuleWrapper } from '../route-types';
import UserModuleWrapper from './user';

const v1Router = Router();

const v1Wrapper: RouteModuleWrapper = (appRouter) => {
  UserModuleWrapper(v1Router);
  appRouter.use('/v1', v1Router);
};

export default v1Wrapper;
