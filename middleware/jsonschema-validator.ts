import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'express-json-validator-middleware';
import { InitApp } from '../utils/util-types';

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    res.status(400).send(error.validationErrors);
    next();
  } else {
    next(error);
  }
};

export const initApp: InitApp = (app) => {
  app.use(errorHandler);
};
