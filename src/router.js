import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/home";
import Transaction from "@/pages/transaction.vue";
import TransactionDetail from "@/pages/transaction-detail.vue";

const routes = [
    {
      path: "/",
      component: Home,
    },
    {
        path: "/transaction",
        component: Transaction,
    },
    {
        path: "/transaction/:id",
        component: TransactionDetail,
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
