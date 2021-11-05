<template>
  <q-stepper
    ref="stepper"
    v-model="stepCurrent"
    color="primary"
    animated
    vertical
    header-nav
  >
    <q-step
      v-for="(step, index) in config.steps"
      :key="index"
      :name="step.id"
      :title="step.title"
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
          @click="$refs.stepper.next()"
        />
        <q-btn
          flat
          color="primary"
          :label="t('common.back')"
          class="q-ml-sm"
          @click="$refs.stepper.previous()"
        />
      </q-stepper-navigation>
    </template>
  </q-stepper>

  <pre>{{ data }}</pre>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useI18n } from 'vue-i18n';
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
    const { setConfig, stepCurrent, data } = useWizard();

    setConfig(props.config);

    return {
      t,
      stepCurrent,
      data,
    };
  },
});
</script>
