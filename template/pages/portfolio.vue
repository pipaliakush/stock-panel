<template>
  <v-container grid-list-xl fluid>
    <Portfolio />
  </v-container>
</template>

<script>
import Portfolio from '@/components/Portfolio/index.vue';

export default {
  components: { Portfolio },
  layout: 'dashboard',
  async asyncData({ store }) {
    await store
      .dispatch('getPortfolio')
      .then(() => {})
      .catch(() => {});
  }
};
</script>

<style scoped>
</style>
