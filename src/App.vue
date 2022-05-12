<template>
  <div id="app" class="d-flex">
    <TenantTable />
    <p>
      <router-link to="/">go home</router-link>
    </p>
    <router-view></router-view>
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