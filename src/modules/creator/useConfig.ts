import { load } from 'js-yaml';
import { Config } from '@/modules/creator/types';

const parseConfig = (configString: string): Config | null => {
  let parsedConfig = null;

  try {
    parsedConfig = load(configString) as Config;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('e', e);
  }

  return parsedConfig;
};

export const useConfig = () => ({
  parseConfig,
});
