import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/home";
import Transaction from "@/pages/transaction.vue";

const routes = [
    {
      path: "/",
      component: Home,
    },
    {
        path: "/transaction",
        component: Transaction,
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
