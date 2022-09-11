import { ErrorRequestHandler } from 'express';
import { Validator, ValidationError } from 'express-json-validator-middleware';
import addFormats from 'ajv-formats';
import { InitApp } from '../utils/util-types';

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    res.status(400).send(error.validationErrors);
    next();
  } else {
    next(error);
  }
};

export function createJsonSchemaValidator(ajvOptions?: ConstructorParameters<typeof Validator>[0]) {
  const finalOptions: NonNullable<typeof ajvOptions> = ajvOptions || { useDefaults: true };
  const validator = new Validator(finalOptions);

  // extend AJV instance
  addFormats(validator.ajv);

  return validator.validate;
}

export const initApp: InitApp = (app) => {
  app.use(errorHandler);
};
