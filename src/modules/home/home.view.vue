<template>
  <router-link :to="{name: 'creator'}">
    Creator
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewHome',
  setup() {
    return {};
  },
});
</script>
