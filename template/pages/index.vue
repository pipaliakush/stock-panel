<template>
  <v-container grid-list-xl fluid>
    <br />
    <StockList />
  </v-container>
</template>

<script>
import StockList from '@/components/StockList/index.vue';

export default {
  layout: 'dashboard',
  components: {
    StockList
  },
  async asyncData({ store }) {
    setInterval(async () => {
      await store
        .dispatch('getStocksList')
        .then(() => {})
        .catch(() => {});
    }, 2000);
  }
};
</script>

<style scoped>
</style>
