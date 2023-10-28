<template>
  <h1>transaction detail</h1>
<!--  <h1>{{ $route }}</h1>-->
  <h1>{{ $route.params.id }}</h1>

  <div class="card mt-3"
       v-if="transaction"
  >
    <div class="card-header">
      <h3>{{ transaction.name }}</h3>
    </div>
    <div class="card-body">
      {{ transaction.id }} - {{ transaction.name }}
    </div>
    <div class="card-footer">
      price: {{ transaction.price }}
    </div>
  </div>
  <div v-else> Loading transaction {{ $route.params.id }} ...</div>
</template>

<script>
export default {
  data() {
    return {
      transaction: null
    };
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
        .then(res => res.json())
        .then(data => this.transaction = data)
        .then(() => {
          console.log(this.transaction)
        });
  }
}
</script>
