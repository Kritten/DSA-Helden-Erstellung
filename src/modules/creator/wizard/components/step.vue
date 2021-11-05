<template>
  <p>{{ step.description }}</p>

  <div class="row q-col-gutter-md">
    <template v-if="step.sections !== undefined">
      <template v-if="step.sections.length === 1">
        <div class="col-12">
          <Section
            :section="step.sections[0]"
          />
        </div>
      </template>

      <template v-else-if="step.sections.length > 1">
        <div
          v-for="(section, index) in step.sections"
          :key="index"
          class="col-12"
        >
          <base-card>
            <q-card-section>
              <Section
                :section="section"
              />
            </q-card-section>
          </base-card>
        </div>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Step } from '@/modules/creator/config.types';
import Section from '@/modules/creator/wizard/components/section.vue';
import BaseCard from '@/modules/app/base/base-card.vue';
import { useWizard } from '@/modules/creator/wizard/useWizard';

export default defineComponent({
  name: 'Step',
  components: {
    Section,
    BaseCard,
  },
  props: {
    step: {
      type: Object as PropType<Step>,
      required: true,
    },
  },
  setup() {
    const { dataStep } = useWizard();

    return { dataStep };
  },
});
</script>
