<template>
  <h1>transaction is here...</h1>
  <div class="row pt-3" v-if="transactions.length">
    <div
        class="card col-3 m-3"
        v-for="transaction in transactions" :key="transaction.id"
    >
      <div class="card-header">
        <router-link
            :to="{ name: 'transaction-detail', params: {id: transaction.id } }"
        >
          {{ transaction.name }}
        </router-link>
      </div>
      <div class="card-body">
        {{ transaction.id }} - {{ transaction.name }}
      </div>
      <div class="card-footer">
        price: {{ transaction.price }}
      </div>
    </div>
  </div>
  <div class="text-danger" v-else-if="error">
    {{ error.message }}
  </div>
  <div v-else></div>
</template>

<script>
import useTransactions from "@/uses/fetchTransactions";

export default {
  // data() {
  //   return {
  //     transactions: [],
  //   }
  // },
  // created() {
  //   fetch("http://localhost:3000/transactions")
  //       .then(res => res.json())
  //       .then(data => this.transactions = data);
  // },
  props: {
    theme: {
      type: String,
      require: false,
      default: "light"
    },
  },
  // setup(props, context) {
  setup({ theme }, { emit }) {
    console.log(theme);
    console.log(emit);

    const { transactions, error, fetchData } = useTransactions();
    fetchData();

    return { transactions, error };
  },

}
</script>
