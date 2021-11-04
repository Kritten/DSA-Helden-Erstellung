<template>
  <div>wizard</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
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
    return {};
  },
});
</script>
