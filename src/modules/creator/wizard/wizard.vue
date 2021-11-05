<template>
  <q-stepper
    v-model="stepCurrent"
    color="primary"
    animated
    vertical
  >
    <q-step
      v-for="(step, index) in config.steps"
      :key="index"
      :name="index"
      :title="step.title"
    >
      <step :step="step" />
    </q-step>
  </q-stepper>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Config } from '@/modules/creator/config';
import Step from '@/modules/creator/wizard/components/step.vue';

export default defineComponent({
  name: 'Wizard',
  components: { Step },
  props: {
    config: {
      required: true,
      type: Object as PropType<Config>,
    },
  },
  setup() {
    const stepCurrent = ref(0);

    return { stepCurrent };
  },
});
</script>
