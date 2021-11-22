import { Router } from 'express';
import { RouteModuleWrapper } from '../route';

const pingRouter = Router();

pingRouter.get('/ping', (req, res) => {
  res.send('pong');
});

const pingModuleWrapper: RouteModuleWrapper = (healthcheckRouter) => {
  healthcheckRouter.use(pingRouter);
};

export default pingModuleWrapper;
