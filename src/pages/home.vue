<template>
  <h1>homepage is here</h1>
  <div class="card m-3">
    <h2 class="card-header">information</h2>
    <div class="card-body">
      <h4>{{ firstName }}</h4>
      <div class="d-flex justify-content-between">
        <p>name: {{ info.name }}</p>
        <p>age: {{ info.age }}</p>
      </div>
      <div>
        <p>ref: {{ a }}</p>
        <p>reactive: {{ b }}</p>
      </div>
    </div>
    <div class="card-footer">
      <button @click="onChangeInfo">click me</button>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <input type="text" v-model="keyword" />
      <p>
        <ul>
          <li v-for="(customer, key) in customersFilter" :key="key">{{ customer }}</li>
        </ul>
      </p>
    </div>
  </div>
  <div>{{ transactions }}</div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import useTransactions from "@/uses/fetchTransactions";
export default {
  setup() {
    const keyword = ref("");
    const customers = reactive(["linH", "lan", "checK", "fill"]);
    const customersFilter = computed(() =>
        customers
            .map(customer => customer.toLowerCase())
            .filter(customer => customer.includes(keyword.value))
    );

    watch(keyword, (value, oldValue) => {
      console.log("new value: ", value);
      console.log("old value: ", oldValue);
    });

    watchEffect(() => {
      if (keyword.value) {
        console.log("runing when keyword change")
      }
    })

    const firstName = ref("linh");
    const info = reactive({
      name: "linh",
      age: 12,
    })

    const a = ref({
      name: 'mes',
      type: 'car'
    });
    let b = reactive({
      name: 'mes',
      type: 'car'
    });

    function onChangeInfo() {
      firstName.value = "pham";
      info.name = "change name";
      info.age = 24;

      a.value = {
        name: 'change a mes',
        type: 'change a car'
      };
      b = {
        name: 'change b mes',
        type: 'change b car'
      };

      console.log(firstName);
      console.log(info);
      console.log(a);
      console.log(b);
    }

    const { transactions, fetchData } = useTransactions();
    fetchData();

    return { transactions, firstName, onChangeInfo, info, a, b, keyword, customersFilter, customers };
  },
}
</script>
