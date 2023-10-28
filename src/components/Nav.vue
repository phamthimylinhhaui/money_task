<template>
  <nav class="nav">
    <router-link :to="{ name: 'home' }" class="nav-link">Over view</router-link>
    <router-link :to="{ name: 'transaction' }" class="nav-link">Transaction</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
  </nav>
</template>
