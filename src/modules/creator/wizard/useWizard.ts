import { ref } from 'vue';
import { Config } from '@/modules/creator/config';
import { Field, Step } from '@/modules/creator/config.types';
import { addValidations, generateValues } from '@/modules/creator/wizard/processConfig';

// const mapEntites = new Map<string, unknown>();
const mapFields = new Map<string, Field>();
// let steps: Array<Step> = [];
const steps = ref<Array<Step>>([]);

const stepCurrent = ref<string>();
// const wizardData = ref<WizardData>();
// const validation = ref<ValidationArgs>();

// const collectIds = (configPassed: Config) => {
//   for (let indexStep = 0; indexStep < configPassed.steps.length; indexStep += 1) {
//     const step = configPassed.steps[indexStep];
//     setId(step);

//     if (step.sections !== undefined) {
//       for (let indexSection = 0; indexSection < step.sections.length; indexSection += 1) {
//         const section = step.sections[indexSection];
//         // setId(section);

//         if (section.fields !== undefined) {
//           for (let indexField = 0; indexField < section.fields.length; indexField += 1) {
//             const field = section.fields[indexField];
//             setId(field);
//           }
//         }
//       }
//     }
//   }
// };

const setConfig = (config: Config) => {
  // collectIds(config);
  // // eslint-disable-next-line no-console
  // console.warn('mapEntites', mapEntites);
  // eslint-disable-next-line
  steps.value = generateValues(config, mapFields);

  addValidations(steps.value as Array<Step>, mapFields);

  // console.log(steps);
  // const collectedResult = collectResult(config);

  // // eslint-disable-next-line no-console
  // console.warn('collectedResult', collectedResult);
  // // eslint-disable-next-line no-console
  // console.warn('mapFields', mapFields);

  // wizardData.value = collectedResult.data;
  // validation.value = collectedResult.validation;

  stepCurrent.value = steps.value[0].id;
};

export const useWizard = () => ({
  setConfig,
  stepCurrent,
  mapFields,
  steps,
});
