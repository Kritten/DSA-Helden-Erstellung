import { ref, computed } from 'vue';
import { Config } from '@/modules/creator/config';
import { WizardData } from '@/modules/creator/data.types';
import { Section, Step } from '@/modules/creator/config.types';

let config: Config;
const stepCurrent = ref<string>();
const data = ref<WizardData>();
const dataStep = computed(() => {
  if (data.value === undefined || stepCurrent.value === undefined) {
    return {};
  }

  return data.value[stepCurrent.value];
});

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
