import { ref } from 'vue';
import { required } from '@vuelidate/validators';
import { ValidationArgs } from '@vuelidate/core';
import { Config } from '@/modules/creator/config';
import {
  StepData, WizardData,
} from '@/modules/creator/data.types';
import { Section, Step } from '@/modules/creator/config.types';

const mapEntites = new Map<string, unknown>();
const mapFields = new Map<string, {
  info: {step: Step;
    section: Section;
  }; validation: ValidationArgs;}>();

let config: Config;
const stepCurrent = ref<string>();
const data = ref<WizardData>();
const validation = ref<ValidationArgs>();

const setId = (entity: {id: string}) => {
  if (entity.id !== undefined) {
    if (mapEntites.has(entity.id)) {
      throw Error(`${entity.id} already used`);
    }
    mapEntites.set(entity.id, entity);
  }
};

const collectIds = (configPassed: Config) => {
  for (let indexStep = 0; indexStep < configPassed.steps.length; indexStep += 1) {
    const step = configPassed.steps[indexStep];
    setId(step);

    if (step.sections !== undefined) {
      for (let indexSection = 0; indexSection < step.sections.length; indexSection += 1) {
        const section = step.sections[indexSection];
        // setId(section);

        if (section.fields !== undefined) {
          for (let indexField = 0; indexField < section.fields.length; indexField += 1) {
            const field = section.fields[indexField];
            setId(field);
          }
        }
      }
    }
  }
};

const generateDataForSection = (section: Section, step: Step): {
  data: StepData;
  validation: ValidationArgs;
} => {
  if (section.fields === undefined) {
    return {
      data: {},
      validation: {},
    };
  }

  return section.fields.reduce((obj, field) => {
    const dataField = null;
    const validationField = {
      required,
    };

    mapFields.set(field.id, {
      info: {
        step,
        section,
      },
      validation: validationField,
    });

    obj.data[field.id] = dataField;
    obj.validation[field.id] = validationField;

    return obj;
  }, {
    data: {},
    validation: {},
  } as {
    data: StepData;
    validation: ValidationArgs;
  });
};

const generateDataForStep = (step: Step): {
  data: StepData;
  validation: ValidationArgs;
} => {
  if (step.sections === undefined) {
    return {
      data: {},
      validation: {},
    };
  }

  return step.sections.reduce((obj, section) => {
    const result = generateDataForSection(section, step);
    obj.data = {
      ...obj.data,
      ...result.data,
    };
    obj.validation = {
      ...obj.validation,
      ...result.validation,
    };

    return obj;
  }, {
    data: {},
    validation: {},
  } as {
    data: StepData;
    validation: ValidationArgs;
  });
};

const setConfig = (configPassed: Config) => {
  config = configPassed;

  collectIds(config);
  // eslint-disable-next-line no-console
  console.warn('mapEntites', mapEntites);

  const collectedResult = config.steps.reduce((obj, step) => {
    const result = generateDataForStep(step);

    obj.data[step.id] = result.data;
    obj.validation[step.id] = result.validation;

    return obj;
  }, {
    data: {},
    validation: {},
  } as {
    data: WizardData;
    validation: ValidationArgs;
  });

  // eslint-disable-next-line no-console
  console.warn('collectedResult', collectedResult);
  // eslint-disable-next-line no-console
  console.warn('mapFields', mapFields);

  data.value = collectedResult.data;
  validation.value = collectedResult.validation;

  stepCurrent.value = config.steps[0].id;
};

export const useWizard = () => ({
  setConfig,
  stepCurrent,
  data,
  validation,
  mapFields,
});
