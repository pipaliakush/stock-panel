<template>
  <Table :stockList="stockList" />
</template>

<script>
import Table from '@/components/StockList/Layout/Table.vue';

export default {
  components: {
    Table
  },
  computed: {
    stockList() {
      return this.$store.state && this.$store.state.stockList;
    }
  }
};
</script>