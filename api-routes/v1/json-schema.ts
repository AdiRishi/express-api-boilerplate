import { AllowedSchema } from 'express-json-validator-middleware';

export type GetUserSchema = {
  id?: number;
  email?: string;
};

export const GetUserJsonSchema: AllowedSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    email: { type: 'string', format: 'email' },
  },
  anyOf: [{ required: ['id'] }, { required: ['email'] }],
};

export type CreateUserSchema = {
  email: string;
};

export const CreateUserJsonSchema: AllowedSchema = {
  type: 'object',
  required: ['email'],
  properties: {
    email: { type: 'string', format: 'email' },
  },
};
