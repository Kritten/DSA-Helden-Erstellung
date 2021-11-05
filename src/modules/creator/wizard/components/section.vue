<template>
  <template v-if="section.fields !== undefined">
    <field
      v-for="field in section.fields"
      :key="field.id"
      :field="field"
    />
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Section } from '@/modules/creator/config.types';
import Field from '@/modules/creator/wizard/components/field.vue';

export default defineComponent({
  name: 'Section',
  components: {
    Field,
  },
  props: {
    section: {
      type: Object as PropType<Section>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
