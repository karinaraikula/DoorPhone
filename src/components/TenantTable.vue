<template>
  <div>
    <h2>Tenant Table</h2>

    <ul>
      <li v-for="tenant in tenants">
        <span>{{ tenant.name }}</span>
        <span>{{ tenant.flat }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    tenants() {
      return this.$store.state.tenants;
    },
  },
};
</script>
