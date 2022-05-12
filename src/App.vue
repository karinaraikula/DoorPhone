<template>
  <v-app id="app" class="d-flex">
    <p>
      <router-link to="/">TenantTable</router-link> |
      <router-link to="/tenant">Tenant</router-link>
    </p>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  components: {},
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
</style>