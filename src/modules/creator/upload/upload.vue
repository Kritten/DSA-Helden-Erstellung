<template>
  <div class="row justify-center">
    <div class="col-12">
      <base-card
        :title="t('creator.upload.defaultFile.label')"
      >
        <q-card-section>
          {{ t('creator.upload.defaultFile.info') }}
        </q-card-section>

        <q-card-section>
          <div class="col-12">
            <q-btn
              :label="t('creator.upload.defaultFile.dsa5')"
              color="primary"
              @click="load('dsa-5.yaml')"
            />
          </div>
        </q-card-section>
      </base-card>
    </div>
    <div class="col-shrink q-my-md text-h5">
      {{ t('common.or') }}
    </div>
    <div class="col-12">
      <base-card
        :title="t('creator.upload.label')"
      >
        <q-card-section>
          <!-- eslint-disable vue/no-v-html -->
          <span v-html="t('creator.upload.info')" />
          <!-- eslint-enable -->
        </q-card-section>

        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-file
                v-model="file"
                :label="t('creator.upload.file')"
                clearable
              />
            </div>
          </div>
        </q-card-section>
      </base-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import baseCard from '@/modules/app/base/base-card.vue';
import { useConfig } from '@/modules/creator/useConfig';

export default defineComponent({
  name: 'Upload',
  components: { baseCard },
  emits: ['upload'],
  setup(props, { emit }) {
    const { t } = useI18n();
    const file = ref<File | null>(null);

    const { parseConfig } = useConfig();

    const parseAndEmitConfig = (configString: string) => {
      const config = parseConfig(configString);
      // eslint-disable-next-line no-console
      console.warn(config);

      if (config === null) {
        throw Error('Invalid yaml-file');
      } else {
        emit('upload', config);
      }
    };

    const load = async (fileName: string) => {
      const response = await fetch(`configs/${fileName}`);
      const configString = await response.text();

      parseAndEmitConfig(configString);
    };

    watch(file, async () => {
      if (file.value !== null) {
        const configString = await file.value.text();

        parseAndEmitConfig(configString);
      }
    });

    return {
      t,
      file,
      load,
    };
  },
});
</script>
