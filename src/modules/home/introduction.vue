<template>
  <q-card>
    <q-card-section>
      <span class="text-h6">{{ t('home.introduction.title') }}</span>
    </q-card-section>

    <q-card-section>
      <!-- eslint-disable vue/no-v-html -->
      <div
        v-html="t('home.introduction.info')"
      />
      <!-- eslint-enable -->
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>
