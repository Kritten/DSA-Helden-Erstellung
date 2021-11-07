<template>
  <q-stepper
    ref="stepper"
    v-model="stepCurrent"
    color="primary"
    animated
    vertical
  >
    <q-step
      v-for="(step, index) in steps"
      :key="index"
      :name="step.id"
      :title="step.config.title"
    >
      <step
        :step="step"
      />
    </q-step>

    <template #navigation>
      <q-stepper-navigation>
        <q-btn
          color="primary"
          :label="t('common.continue')"
          @click="next"
        />
        <q-btn
          flat
          color="primary"
          :label="t('common.back')"
          class="q-ml-sm"
          @click="back"
        />
      </q-stepper-navigation>
    </template>
  </q-stepper>

  <pre>{{ wizardData }}</pre>
</template>

<script lang="ts">
import {
  defineComponent, PropType, ref, computed,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { useVuelidate } from '@vuelidate/core';
import { QStepper } from 'quasar';
import { Config } from '@/modules/creator/config';
import Step from '@/modules/creator/wizard/components/step.vue';
import { useWizard } from '@/modules/creator/wizard/useWizard';

export default defineComponent({
  name: 'Wizard',
  components: { Step },
  props: {
    config: {
      required: true,
      type: Object as PropType<Config>,
    },
  },
  setup(props) {
    const { t } = useI18n();
    const {
      setConfig, stepCurrent, steps,
    } = useWizard();

    const wizardData = computed(() => steps.value.reduce((obj, step) => {
      obj[step.id] = step.sections.reduce((objSections, section) => ({
        ...objSections,
        ...section.fields.reduce((objFields, field) => {
          objFields[field.id] = field.value;
          return objFields;
        }, {} as Record<string, unknown>),
      }), {} as Record<string, unknown>);
      return obj;
    }, {} as Record<string, unknown>));

    const stepper = ref<QStepper | null>(null);

    setConfig(props.config);

    const vuelidate = useVuelidate();

    const next = async () => {
      vuelidate.value.$touch();
      const isValid = await vuelidate.value.$validate();

      if (isValid) {
        if (stepper.value !== null) {
          stepper.value.next();
        }
      }
    };
    const back = () => {
      if (stepper.value !== null) {
        stepper.value.previous();
      }
    };

    return {
      t,
      stepCurrent,
      vuelidate,
      next,
      back,
      stepper,
      steps,
      wizardData,
    };
  },
});
</script>
