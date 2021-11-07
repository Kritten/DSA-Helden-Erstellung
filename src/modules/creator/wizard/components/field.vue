<template>
  <template v-if="field.type === 'text'">
    <base-input-text
      v-model="valueField"
      :options="{label: field.label}"
      :validation="validation[field.id]"
    />
  </template>
  <template v-else-if="field.type === 'number'">
    <base-input-number
      v-model="valueField"
      :options="{label: field.label}"
      :validation="validation[field.id]"
    />
  </template>
  <template v-else-if="field.type === 'select'">
    <base-input-select
      v-model="valueField"
      :options="{
        label: field.label,
        items,
      }"
      :validation="validation[field.id]"
    />
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
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
    const { data, mapFields } = useWizard();

    const field = mapFields.get(props.field.id);

    if (field === undefined) {
      throw Error('Field not found');
    }

    const valueField = computed<unknown>({
      get: () => {
        if (data.value === undefined) {
          throw Error('Field not found');
        }

        const stepData = data.value[field.info.step.id];
        const fieldData = stepData[props.field.id];

        return fieldData;
      },
      set: (newValue) => {
        if (data.value === undefined) {
          throw Error('Field not found');
        }

        data.value[field.info.step.id][props.field.id] = newValue;
      },
    });

    const validationField = computed(() => ({
      [props.field.id]: field.validation,
    }));

    const validation = useVuelidate(
      validationField,
      { [props.field.id]: valueField },
    );

    let items: Array<{value: string; label: string}> = [];

    if (props.field.data !== undefined) {
      items = props.field.data.map((value) => ({
        label: value,
        value,
      }));
    }

    if (props.field.maximum !== undefined) {
      if (typeof props.field.maximum !== 'number') {
        if (props.field.maximum.switch !== undefined) {
          console.warn(props.field.maximum);
        }
      }
    }

    return {
      data,
      items,
      validation,
      valueField,
    };
  },
});
</script>
