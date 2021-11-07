import { ValidationArgs } from '@vuelidate/core';
import {
  required,
} from '@vuelidate/validators';
import { ref } from 'vue';
import { Config } from '@/modules/creator/config';
import { StepData, WizardData } from '@/modules/creator/data.types';
import { SectionJson, StepJson } from '@/modules/creator/schema.types';
import { Field, Section, Step } from '@/modules/creator/config.types';

const generateDataForSection = (section: SectionJson): {
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

    const validationField: ValidationArgs = {
      required,
    };

    // if (field.maximum !== undefined) {
    //   if (typeof field.maximum !== 'number') {
    //     // const referencedField = mapFields.get(field.maximum.switch as string);
    //     // referencedField.
    //     validationField.maximum = (value) => {
    //       value <= 3;
    //     };
    //   }
    // }

    // mapFields.set(field.id, {
    //   info: {
    //     step,
    //     section,
    //     field,
    //   },
    //   validation: validationField,
    // });

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

const generateDataForStep = (step: StepJson): {
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
    const result = generateDataForSection(section);
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

export const collectResult = (config: Config): {
  data: WizardData;
  validation: ValidationArgs;
} => config.steps.reduce((obj, step) => {
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

const setId = (entity: {id: string}, mapFields: Map<string, unknown>) => {
  if (entity.id !== undefined) {
    if (mapFields.has(entity.id)) {
      throw Error(`${entity.id} already used`);
    }

    mapFields.set(entity.id, entity);
  }
};

export const addValidations = (steps: Array<Step>, mapFields: Map<string, Field>) => {
  for (let indexStep = 0; indexStep < steps.length; indexStep += 1) {
    const step = steps[indexStep];

    for (let indexSection = 0; indexSection < step.sections.length; indexSection += 1) {
      const section = step.sections[indexSection];

      if (section.fields !== undefined) {
        for (let indexField = 0; indexField < section.fields.length; indexField += 1) {
          const field = section.fields[indexField];
          field.validation = {
            required,
          };

          if (field.config.maximum !== undefined) {
            if (typeof field.config.maximum !== 'number') {
              const switchCase = field.config.maximum;
              const referencedField = mapFields.get(switchCase.switch as string);
              if (referencedField === undefined) {
                throw Error(`Field ${field.config.maximum.switch as string} not found`);
              }

              field.validation.maximum = (value: number) => {
                let comparedValue = -Infinity;
                if (switchCase.cases === undefined) {
                  return true;
                }

                for (let index = 0; index < switchCase.cases.length; index += 1) {
                  const case1 = switchCase.cases[index];
                  if (case1.expression === referencedField.value.value) {
                    comparedValue = case1.value as number;
                    break;
                  }
                }
                return value <= comparedValue;
              };
            }
          }
        }
      }
    }
  }
};

export const generateValues = (config: Config, mapFields: Map<string, Field>): Array<Step> => {
  const steps: Array<Step> = [];

  for (let indexStep = 0; indexStep < config.steps.length; indexStep += 1) {
    const stepJson = config.steps[indexStep];
    const step: Step = {
      id: stepJson.id,
      config: stepJson,
      sections: [],
    };

    steps.push(step);

    if (stepJson.sections !== undefined) {
      for (let indexSection = 0; indexSection < stepJson.sections.length; indexSection += 1) {
        const sectionJson = stepJson.sections[indexSection];
        const section: Section = {
          config: sectionJson,
          fields: [],
        };

        step.sections.push(section);
        // setId(section);

        if (sectionJson.fields !== undefined) {
          for (let indexField = 0; indexField < sectionJson.fields.length; indexField += 1) {
            const fieldJSON = sectionJson.fields[indexField];
            const field: Field = {
              id: fieldJSON.id,
              config: fieldJSON,
              value: ref<unknown | null>(null),
              step,
              section,
              validation: {},
            };

            section.fields.push(field);

            setId(field, mapFields);
          }
        }
      }
    }
  }

  return steps;
};
