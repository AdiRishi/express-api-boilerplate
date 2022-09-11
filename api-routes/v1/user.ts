import { Router } from 'express';
import { createUser, getUser } from '../../controllers/user';
import { createJsonSchemaValidator } from '../../middleware/jsonschema-validator';
import Logger from '../../utils/logging';
import { RouteModuleWrapper } from '../route-types';
import {
  CreateUserJsonSchema,
  CreateUserSchema,
  GetUserJsonSchema,
  GetUserSchema,
} from './json-schema';

const userRouter = Router();
const JsonSchemaValidator = createJsonSchemaValidator();

userRouter.get('/user', JsonSchemaValidator({ body: GetUserJsonSchema }), async (req, res) => {
  const data = req.body as GetUserSchema;
  try {
    const user = await getUser(data);
    if (user) {
      res.status(200).send(user);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    Logger.error(error);
    res.sendStatus(500);
  }
});

userRouter.post('/user', JsonSchemaValidator({ body: CreateUserJsonSchema }), async (req, res) => {
  const data = req.body as CreateUserSchema;
  try {
    const user = await createUser(data);
    res.status(201).send(user);
  } catch (error) {
    Logger.error(error);
    res.sendStatus(500);
  }
});

const userModuleWrapper: RouteModuleWrapper = (v1Router) => {
  v1Router.use(userRouter);
};

export default userModuleWrapper;
