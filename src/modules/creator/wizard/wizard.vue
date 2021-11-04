<template>
  <q-stepper
    v-model="stepCurrent"
    color="primary"
    animated
  >
    <q-step
      v-for="(step, index) in config.steps"
      :key="index"
      :name="index"
      :title="step.title"
    >
      {{ step.description }}
    </q-step>
  </q-stepper>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Config } from '@/modules/creator/config';

export default defineComponent({
  name: 'Wizard',
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
