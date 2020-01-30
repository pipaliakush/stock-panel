<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in stockList && stockList.data" :key="stock.id">
          <th scope="row">{{ stock.id }}</th>
          <td>{{ stock.name }}</td>
          <td>{{ stock.price }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    stockList() {
      return this.$store.state && this.$store.state.stockList;
    }
  }
};
</script>