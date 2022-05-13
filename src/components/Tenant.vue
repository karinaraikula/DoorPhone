<template>
  <v-container>
    <v-card class="pa-5">
      <v-form id="tenantform">
        <label>Name</label>
        <input type="text" />
        <label>Phone number</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <v-btn>button</v-btn>
      </v-form>
    </v-card>
  </v-container>
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
  mounted() {
  },
};

</script>
<style scoped>
#tenantform {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 50%;
}

#tenantform input {
  border: 1px solid black;
}
</style>