<template>
  <v-dialog v-model="tenantDialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
        Click Me
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Privacy Policy
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="tenantDialog = false">
          I accept
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      tenantDialog: false,
    };
  },
  computed: {
    headers() {
      return this.$store.state.headers;
    },
    tenants() {
      return this.$store.state.tenants;
    },
  },
};
</script>