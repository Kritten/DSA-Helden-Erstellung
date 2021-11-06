import { ref, computed } from 'vue';
import { Config } from '@/modules/creator/config';
import { WizardData } from '@/modules/creator/data.types';
import { Section, Step } from '@/modules/creator/config.types';

const mapEntites = new Map<string, unknown>();

let config: Config;
const stepCurrent = ref<string>();
const data = ref<WizardData>();
const dataStep = computed(() => {
  if (data.value === undefined || stepCurrent.value === undefined) {
    return {};
  }

  return data.value[stepCurrent.value];
});

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

const generateDataForSection = (section: Section) => {
  if (section.fields === undefined) {
    return {};
  }

  return section.fields.reduce((obj, field) => ({
    ...obj,
    [field.id]: null,
  }), {});
};

const generateDataForStep = (step: Step) => {
  if (step.sections === undefined) {
    return {};
  }

  return step.sections.reduce((obj, section) => ({
    ...obj,
    ...generateDataForSection(section),
  }), {});
};

const setConfig = (configPassed: Config) => {
  config = configPassed;

  collectIds(config);
  console.warn('mapEntites', mapEntites);

  data.value = config.steps.reduce((obj, step) => {
    obj[step.id] = generateDataForStep(step);

    return obj;
  }, {} as WizardData);

  stepCurrent.value = config.steps[0].id;
};

export const useWizard = () => ({
  setConfig,
  stepCurrent,
  dataStep,
  data,
});
