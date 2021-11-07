import { JSONSchemaFurDieDSAHeldenErstellung, StepJson } from '@/modules/creator/schema.types';

export class Config {
  public steps: Array<StepJson>;

  constructor(parsedConfig: JSONSchemaFurDieDSAHeldenErstellung) {
    this.steps = parsedConfig.steps;
  }
}
