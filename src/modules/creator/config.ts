import { Step } from '@/modules/creator/config.types';
import { JSONSchemaFurDieDSAHeldenErstellung } from '@/modules/creator/schema.types';

export class Config {
  public steps: Array<Step>;

  constructor(parsedConfig: JSONSchemaFurDieDSAHeldenErstellung) {
    this.steps = parsedConfig.steps;
  }
}
