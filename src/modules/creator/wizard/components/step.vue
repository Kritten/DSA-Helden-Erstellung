<template>
  <p>{{ step.description }}</p>
  <template v-if="step.fields !== undefined">
    <field
      v-for="field in step.fields"
      :key="field.id"
      :field="field"
    />
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Step } from '@/modules/creator/config.types';
import field from '@/modules/creator/wizard/components/field.vue';

export default defineComponent({
  name: 'Step',
  components: { field },
  props: {
    step: {
      type: Object as PropType<Step>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
