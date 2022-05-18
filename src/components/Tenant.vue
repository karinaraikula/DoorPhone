<template>
  <v-container>
    <v-card class="pa-5">
      <v-form>
        <v-text-field label="Tenant ID" v-model="id" disabled> </v-text-field>
        <v-text-field label="Flat no." v-model="flat" prepend-icon="mdi-pencil">
        </v-text-field>
        <v-text-field label="Name" v-model="name" prepend-icon="mdi-pencil">
        </v-text-field>
        <v-text-field label="Email" v-model="email" prepend-icon="mdi-pencil">
        </v-text-field>
        <v-text-field
          label="Phone number 1"
          v-model="phoneNumber1"
          prepend-icon="mdi-pencil"
        >
        </v-text-field>
        <v-btn text @click="update">Update</v-btn>
        <v-btn text @click="deleteTenant(currentTenant)">Delete</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: this.$store.state.currentTenant.id,
      name: this.$store.state.currentTenant.name,
      flat: this.$store.state.currentTenant.flat,
      email: this.$store.state.currentTenant.email,
      phoneNumber1: this.$store.state.currentTenant.phoneNumber1,
    };
  },
  methods: {
    update() {
      const tenant = {
        id: this.id,
        flat: this.flat,
        name: this.name,
        email: this.email,
        phoneNumber1: this.phoneNumber1,
      };
      this.$store.commit("updateTenant", tenant);
      this.$router.push({ name: "tenantTable" });
    },

    deleteTenant(tenant) {
      this.$store.commit("deleteTenant",tenant,);
      this.$router.push({ name: "tenantTable" });
    },
  },

  computed: {
    currentTenant() {
      return this.$store.state.currentTenant;
    },
  },
  //getCurrentTenant
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