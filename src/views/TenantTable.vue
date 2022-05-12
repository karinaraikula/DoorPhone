<template>
  <v-container fluid>
    <h2>Tenant Table</h2>
    <v-card fluid max-width="500px">
      <v-data-table
        :headers="headers"
        :items="tenants"
        class="elevation-2 mx-auto"
        @click:row="
          {
            openInfo();
          }
        "
      ></v-data-table>
    </v-card>

    <Tenant />
  </v-container>
</template>

<script>
import Tenant from "../components/Tenant.vue";

export default {
  name: "TenantTable",

  components: {
    Tenant,
  },

  computed: {
    headers() {
      return this.$store.state.headers;
    },
    tenants() {
      return this.$store.state.tenants;
    },
  },
  methods: {
    openInfo(item) {
      console.log("openInfo clicked", this.item);
    },
  },
};
</script>