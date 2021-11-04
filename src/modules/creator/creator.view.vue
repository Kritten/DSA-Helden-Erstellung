<template>
  <div
    class="q-gutter-md"
  >
    <upload
      v-if="config === null"
      @upload="config = $event"
    />

    <wizard
      v-else
      :config="config"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Config } from '@/modules/creator/config';
import Upload from './upload/upload.vue';
import Wizard from './wizard/wizard.vue';

export default defineComponent({
  name: 'ViewCreator',
  components: { Upload, Wizard },
  setup() {
    const { t } = useI18n();
    const config = ref<Config | null>(null);

    return { t, config };
  },
});
</script>
