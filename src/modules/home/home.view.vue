<template>
  <div
    class="q-gutter-md"
    style="text-align: center"
  >
    <introduction />

    <q-btn
      color="primary"
      size="xl"
      :to="{
        name: 'creator'
      }"
    >
      {{ t('home.goToCreator') }}
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import Introduction from './introduction.vue';

export default defineComponent({
  name: 'ViewHome',
  components: { Introduction },
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>
