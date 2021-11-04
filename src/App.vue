<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="isCollapsed = !isCollapsed"
        />

        <q-toolbar-title>
          <q-avatar>
            <q-img src="./assets/logo.png" />
          </q-avatar>
          {{ t('app.label') }}
        </q-toolbar-title>

        <q-btn
          dense
          flat
          round
          :icon="fabGithub"
          type="a"
          tooltip="test"
          target="__blank"
          href="https://github.com/Kritten/DSA-Helden-Erstellung"
        >
          <q-tooltip>
            {{ t('common.github') }}
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="isCollapsed"
      show-if-above
      side="left"
      bordered
      :mini="miniState"
      mini-to-overlay
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <q-list>
        <template
          v-for="(route, index) in routes"
          :key="route.label"
        >
          <q-separator
            v-if="route.separator"
            :key="'sep' + index"
          />
          <q-item
            :to="{name: route.name}"
            clickable
            exact
          >
            <q-item-section avatar>
              <q-icon :name="route.icon" />
            </q-item-section>
            <q-item-section>
              {{ route.label }}
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  fasHome,
  fasMagic,
  fabGithub,
} from '@quasar/extras/fontawesome-v5';

export default defineComponent({
  name: 'App',
  setup() {
    const { t } = useI18n();
    const isCollapsed = ref(false);
    const miniState = ref(true);

    const routes = [
      {
        label: t('home.label'),
        name: 'home',
        icon: fasHome,
      },
      {
        label: t('creator.label'),
        name: 'creator',
        icon: fasMagic,
      },
      // {
      //   label: t('about.label'),
      //   name: 'about',
      //   icon: fasInfo,
      //   separator: true,
      // },
    ];

    return {
      t,
      isCollapsed,
      miniState,
      toggleLeftDrawer() {
        isCollapsed.value = !isCollapsed.value;
      },
      routes,
      fabGithub,
    };
  },
});
</script>
