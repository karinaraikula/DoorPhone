<template>
  <div id="app">
    <TenantTable />
  </div>
</template>

<script>
import TenantTable from "./components/TenantTable.vue";
export default {
  components: {
    TenantTable,
  },
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
</style>
