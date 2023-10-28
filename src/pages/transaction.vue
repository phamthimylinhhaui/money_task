<template>
  <h1>transaction is here...</h1>
  <div class="row pt-3">
    <div
        class="card col-3 m-3"
        v-for="transaction in transactions" :key="transaction.id"
    >
      <div class="card-header">
        <router-link :to="`/transaction/${transaction.id}`">{{ transaction.name }}</router-link>
      </div>
      <div class="card-body">
        {{ transaction.id }} - {{ transaction.name }}
      </div>
      <div class="card-footer">
        price: {{ transaction.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "traction 1 dien nuoc",
          price: 1200,
        },
        {
          id: 2,
          name: "traction 2 nha",
          price: 5200,
        },
        {
          id: 3,
          name: "traction 3 dat",
          price: 7000,
        },
      ],
    }
  },
}
</script>
