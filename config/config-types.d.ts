type EnvType = 'development' | 'production';

export type Config = {
  environment: EnvType;
  host: string;
  port: number;
  dbConnectionUrl: string;
};
