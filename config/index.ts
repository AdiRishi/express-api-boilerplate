import { Config, EnvType } from './config-types';
import defaultConfig from './default';
import devConfig from './development';
import prodConfig from './production';

const ConfigEnvironmentOverrideMapping: { [Property in keyof Config]: string } = {
  environment: 'NODE_ENV',
  host: 'HOST',
  port: 'PORT',
  dbConnectionUrl: 'DB_CONNECTION_URL',
};

const overrideFromEnv: (c: Config) => void = (config: Config) => {
  let key: keyof Config;
  for (key in ConfigEnvironmentOverrideMapping) {
    const envKey = ConfigEnvironmentOverrideMapping[key];
    if (process.env[envKey]) {
      // type hinting as never due to typescript getting confused
      config[key] = process.env[envKey] as never;
    }
  }
};

let finalConfig: Config = defaultConfig;
const REALM: EnvType = process.env.REALM ? (process.env.REALM as EnvType) : 'development';

if (REALM == 'development') {
  finalConfig = { ...finalConfig, ...devConfig };
} else {
  finalConfig = { ...finalConfig, ...prodConfig };
}

// Always treat proces.env as a final override for code config
overrideFromEnv(finalConfig);

if (!process.env.NODE_ENV) {
  // always set NODE_ENV as it impacts the behavior of express and other node modules
  process.env.NODE_ENV = finalConfig.environment;
}

export default finalConfig;
