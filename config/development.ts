import { Config } from './config-types';

const config: Partial<Config> = {
  environment: 'development',
  dbConnectionUrl: 'postgresql://dev:dev@localhost:5432/express_boilerplate?schema=public',
};

export default config;
