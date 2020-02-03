<template>
  <div>
    <div class="spinner" v-if="!Object.keys(latestData).length">
      <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
    </div>
    <table class="table bg-white" v-else>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col" class="w-price">Price</th>
          <th scope="col" class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in latestData" :key="stock.id">
          <th scope="row">{{ stock.id }}</th>
          <td>{{ stock.name }}</td>
          <td v-if="stock && stock.priceChange > 0" class="text-success w-price">
            {{ stock.price }}
            <i class="fa fa-caret-up" aria-hidden="true"></i>
          </td>
          <td v-else-if="stock && stock.priceChange < 0" class="text-danger w-price">
            {{ stock.price }}
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </td>
          <td v-else class="w-price">{{ stock.price }}</td>
          <td class="text-center">
            <div>
              <button
                type="button"
                class="btn btn-outline-primary"
                data-toggle="modal"
                :data-target="'#' + stock.id"
              >Buy</button>
              <BuyModal :stockDetails="stock" />
              <button
                type="button"
                class="btn btn-outline-danger"
                data-toggle="modal"
                :data-target="'#' + stock.id + 'sell'"
              >Sell</button>
              <SellModal :stockDetails="stock" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BuyModal from '@/components/StockList/Modal/Buy.vue';
import SellModal from '@/components/StockList/Modal/Sell.vue';

export default {
  components: {
    BuyModal,
    SellModal
  },
  data() {
    return {
      oldData: {},
      latestData: {}
    };
  },
  props: {
    stockList: {
      type: Object,
      default: {}
    }
  },
  watch: {
    stockList(latestValue, oldValue) {
      this.oldData = Object.assign({}, oldValue && oldValue.data);
      if (oldValue && oldValue.data && oldValue.data.length) {
        this.latestData = Object.assign({}, latestValue && latestValue.data);
        Object.keys(this.latestData).forEach(e => {
          this.latestData[e].priceChange =
            this.latestData[e].price - this.oldData[e].price;
        });
      } else {
        this.latestData = latestValue.data;
      }
    }
  }
};
</script>

<style scoped>
.w-price {
  width: 150px;
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>