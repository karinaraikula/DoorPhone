<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
        Click Me
      </v-btn>
    </template>

    <v-card>
     

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn  text @click="dialog = false"> close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
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