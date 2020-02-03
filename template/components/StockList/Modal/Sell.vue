<template>
  <div
    class="modal fade"
    :id="stockDetails.id + 'sell'"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            id="exampleModalLabel"
          >{{stockDetails.name}}&nbsp;({{stockDetails.id}})</h5>
          <!-- {{stockDetails}} -->
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h4>
            Current Price:&nbsp;
            <i class="fa fa-inr" aria-hidden="true"></i>
            {{stockDetails.price}}
          </h4>
          <v-text-field
            label="Qty"
            type="number"
            v-model="value"
            min="1"
            aria-placeholder="Enter qty "
          ></v-text-field>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="sellStock">
            Sell &nbsp;
            <v-progress-circular v-if="isShow" indeterminate size="16"></v-progress-circular>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stockDetails: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      value: 1,
      isShow: false
    };
  },
  methods: {
    sellStock() {
      const stockDetails = {
        stockId: this.stockDetails.id,
        unitsToSell: this.value
      };
      this.isShow = true;
      this.$store
        .dispatch('sellStocks', stockDetails)
        .then(() => {
          this.$store
            .dispatch('getPortfolio')
            .then(() => {
              this.$toasted.success('Stocks Sold Succesfully', {
                duration: 4000
              });

              this.isShow = false;
              // close modal after stock purchased successfully
              $(`#${this.stockDetails.id}sell`).modal('hide');
              this.$router.push('portfolio');
            })
            .catch(() => {
              this.isShow = false;
              this.$toasted.error(
                'Something went wrong! Insufficient units in portfolio',
                {
                  duration: 4000
                }
              );
            });
        })
        .catch(() => {
          this.isShow = false;
          this.$toasted.error(
            'Something went wrong! Insufficient units in portfolio',
            {
              duration: 4000
            }
          );
        });
    }
  }
};
</script>