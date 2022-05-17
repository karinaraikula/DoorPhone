<template>
  <v-container fluid>
    <h2>Tenant Table</h2>
    <v-card fluid max-width="500px">
      <v-data-table
        :headers="headers"
        :items="tenants"
        class="elevation-2 mx-auto"
        @click:row="openInfo"
      >
        <Tenant />
      </v-data-table>
      <v-btn @click="addNew">Add new</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import Tenant from "../components/Tenant.vue";
import AddTenant from "../views/AddTenant.vue";

export default {
  name: "TenantTable",

  components: {
    Tenant,
    AddTenant,
  },
  data() {
    return {};
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
      console.log("openinfo clicked ", this.$store.getters.getTenantById(item.flat));

      const tenantProfile = this.$store.getters.getTenantById(item.flat);
      this.$store.commit('openTenant', tenantProfile);
      this.$router.push({ name: "tenant" });
    },

    addNew() {
      this.$router.push({ name: "addtenant" });
    },
  },

  mounted() {
    console.log("mounted ", this.$store.state.tenants);
  },
};
</script>