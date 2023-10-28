<template>
  <h1>transaction detail</h1>
  <h1>{{ $route }}</h1>
  <h1>{{ $route.params.id }}</h1>
</template>

<script>

const check = { "fullPath": "/transaction/1", "path": "/transaction/1", "query": {}, "hash": "", "params": { "id": "1" }, "matched": [ { "path": "/transaction/:id", "meta": {}, "props": { "default": false }, "children": [], "instances": { "default": {} }, "leaveGuards": { "Set(0)": [] }, "updateGuards": { "Set(0)": [] }, "enterCallbacks": {}, "components": { "default": { "__file": "src/pages/transaction-detail.vue", "__hmrId": "b289d0b8" } } } ], "meta": {}, "href": "#/transaction/1" }

console.log(check)
</script>
