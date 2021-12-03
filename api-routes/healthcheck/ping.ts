import { Router } from 'express';
import { RouteModuleWrapper } from '../route-types';
import prisma from '../../utils/db';
import Logger from '../../utils/logging';

const pingRouter = Router();

pingRouter.get('/ping', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.send('pong');
  } catch (error) {
    Logger.error(error);
    res.sendStatus(500);
  }
});

const pingModuleWrapper: RouteModuleWrapper = (healthcheckRouter) => {
  healthcheckRouter.use(pingRouter);
};

export default pingModuleWrapper;
