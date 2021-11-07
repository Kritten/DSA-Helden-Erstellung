<template>
  <template v-if="field.config.type === 'text'">
    <base-input-text
      v-model="valueField.value"
      :options="{label: field.config.label}"
      :validation="validation[field.id]"
    />
  </template>
  <template v-else-if="field.config.type === 'number'">
    <base-input-number
      v-model="valueField.value"
      :options="{label: field.config.label}"
      :validation="validation[field.id]"
    />
  </template>
  <template v-else-if="field.config.type === 'select'">
    <base-input-select
      v-model="valueField.value"
      :options="{
        label: field.config.label,
        items,
      }"
      :validation="validation[field.id]"
    />
  </template>
</template>

<script lang="ts">
import {
  defineComponent, PropType, computed,
} from 'vue';
import { useVuelidate, ValidationArgs } from '@vuelidate/core';
import { Field } from '@/modules/creator/config.types';
import baseInputText from '@/modules/app/base/inputs/base-input-text.vue';
import BaseInputNumber from '@/modules/app/base/inputs/base-input-number.vue';
import BaseInputSelect from '@/modules/app/base/inputs/base-input-select.vue';
import { useWizard } from '@/modules/creator/wizard/useWizard';

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
    const { mapFields } = useWizard();

    const field = mapFields.get(props.field.id);

    if (field === undefined) {
      throw Error('Field not found');
    }

    const valueField = computed({
      get: () => field.value,
      set: (newValue) => {
        field.value.value = newValue;
      },
    });

    const validationField = computed(() => ({
      [props.field.id]: field.validation as ValidationArgs,
    }));

    const validation = useVuelidate(
      validationField,
      { [props.field.id]: valueField.value },
    );

    let items: Array<{value: string; label: string}> = [];

    if (props.field.config.data !== undefined) {
      items = props.field.config.data.map((value) => ({
        label: value,
        value,
      }));
    }

    return {
      items,
      validation,
      valueField,
    };
  },
});
</script>
