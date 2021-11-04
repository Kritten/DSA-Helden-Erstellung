import { load } from 'js-yaml';
import { Config } from '@/modules/creator/config';
import { JSONSchemaFurDieDSAHeldenErstellung } from '@/modules/creator/schema.types';

const parseConfig = (configString: string): Config | null => {
  let config = null;

  try {
    const parsedConfig = load(configString) as JSONSchemaFurDieDSAHeldenErstellung;
    config = new Config(parsedConfig);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('e', e);
  }

  return config;
};

export const useConfig = () => ({
  parseConfig,
});
