<template>
  <v-container fluid>
    <h2 class="mb-3">Tenant</h2>
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
  </v-container>
</template>

<script>
export default {
  name: "Tenant",
  computed: {
    headers() {
      return this.$store.state.headers;
    },
    tenants() {
      return this.$store.state.tenants;
    },
  },
  methods: {

    },
  },
};
</script>
