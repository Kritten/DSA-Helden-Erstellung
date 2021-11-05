<template>
  {{ data }}
  <q-stepper
    v-model="stepCurrent"
    color="primary"
    animated
    vertical
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
  </q-stepper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
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
    const { setConfig, stepCurrent, data } = useWizard();

    setConfig(props.config);

    return {
      stepCurrent,
      data,
    };
  },
});
</script>
