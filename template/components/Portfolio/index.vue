<template>
  <div class="row" v-if="viewPortfolio">
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card shadow p-3 mb-5 bg-white rounded">
        <div class="card-body">
          <h3 class="card-title">Available Balance</h3>
          <h3 class="card-text">
            <i class="fa fa-inr" aria-hidden="true"></i>
            {{ viewPortfolio && viewPortfolio.cash }}
          </h3>
        </div>
      </div>
    </div>
    <div class="col-lg-8 col-md-6 col-sm-12">
      <div
        class="shadow bg-white rounded"
        v-if="viewPortfolio && viewPortfolio.buys && viewPortfolio.buys.length"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Units</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="share in viewPortfolio.buys" :key="share.id">
              <td>{{share.id}}</td>
              <td>{{share.name}}</td>
              <td>{{share.units}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        v-else
        class="text-center border bg-white mb-2 nodata shadow rounded"
      >You haven't purchased any shares</div>
    </div>
  </div>
  <div class="spinner" v-else>
    <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
  </div>
</template>

<script>
export default {
  computed: {
    viewPortfolio() {
      return this.$store.state.portfolio && this.$store.state.portfolio.data;
    }
  }
};
</script>

<style scoped>
.nodata {
  min-height: 133px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>