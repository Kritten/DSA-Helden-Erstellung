<template>
  <template v-if="field.type === 'text'">
    <base-input-text
      v-model="value"
      :options="{label:'tesfft'}"
    />
  </template>
  <template v-else-if="field.type === 'number'">
    <base-input-number
      v-model="value"
      :options="{label:'tesfft'}"
    />
  </template>
  <template v-else-if="field.type === 'select'">
    <base-input-select
      v-model="value"
      :options="{
        label:'tesfft',
        items,
      }"
    />
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Field } from '@/modules/creator/config.types';
import baseInputText from '@/modules/app/base/inputs/base-input-text.vue';
import BaseInputNumber from '@/modules/app/base/inputs/base-input-number.vue';
import BaseInputSelect from '@/modules/app/base/inputs/base-input-select.vue';

export default defineComponent({
  name: 'Field',
  components: {
    baseInputText,
    BaseInputNumber,
    BaseInputSelect,
  },
  props: {
    field: {
      type: Object as PropType<Field>,
      required: true,
    },
  },
  setup(props) {
    let items: Array<{value: string; label: string}> = [];

    if (props.field.data !== undefined) {
      items = props.field.data.map((value) => ({
        label: value,
        value,
      }));
    }

    return {
      value: ref(),
      items,
    };
  },
});
</script>
