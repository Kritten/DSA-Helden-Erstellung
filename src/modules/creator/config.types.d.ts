import { Ref } from 'vue';
// import { ValidationArgs } from '@vuelidate/core';
import { FieldJson, SectionJson, StepJson } from '@/modules/creator/schema.types';

type Field = {
  id: string;
  config: FieldJson;
  // eslint-disable-next-line no-use-before-define
  section: Section;
  // eslint-disable-next-line no-use-before-define
  step: Step;
  value: Ref<unknown>;
  // validation: ValidationArgs;
  validation: Record<string, unknown>;
}

export type Section = {
  config: SectionJson;
  fields: Array<Field>;
}

export type Step = {
  id: string;
  config: StepJson;
  sections: Array<Section>;
}
