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
    return {
      item: {},
    };
  },
  computed: {
    headers() {
      return this.$store.state.headers;
    },
    tenants() {
      return this.$store.state.tenants;
    },
    getTenantById() {
      return this.$store.getters.getTenantById;
    },
  },
    methods: {
      openInfo(item) {
        console.log(this.$store.getters.getTenantById(item.id));
        this.$router.push({ name: "tenant" });
      },

      addNew() {
        this.$router.push({ name: "addtenant" });
      },
    },
    mounted() {
      console.log(this.$store.state.tenants);
    },

};
</script>