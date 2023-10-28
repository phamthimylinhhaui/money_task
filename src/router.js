import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/home";
import Transaction from "@/pages/transaction.vue";
import TransactionDetail from "@/pages/transaction-detail.vue";

const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
        path: "/transaction",
        name: "transaction",
        component: Transaction,
    },
    {
        path: "/transaction/:id",
        name: "transaction-detail",
        component: TransactionDetail,
    },
    {
        path: "/ts",
        redirect: "/transaction",
    },
    {
        path: "/:pathMatch(.*)*",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
