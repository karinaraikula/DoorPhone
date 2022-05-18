<template>
  <v-container>
    <v-card class="pa-5">
      <v-form>
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
        <v-btn text @click="deleteTenant">Delete</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: this.$store.state.currentTenant.name,
      flat: this.$store.state.currentTenant.flat,
      email: this.$store.state.currentTenant.email,
      phoneNumber1: this.$store.state.currentTenant.phoneNumber1,
    };
  },
  methods: {
    update() {
      const tenant = {
        flat: this.flat,
        name: this.name,
        email: this.email,
        phoneNumber1: this.phoneNumber1,
      };
      console.log("tenant info: ", tenant);

      this.$store.commit("updateTenant", tenant);
      this.$router.push({ name: "tenantTable" });
    },
    deleteTenant() {
      this.$store.commit("deleteTenant");
      this.$router.push({ name: "tenantTable" });
    },
  },
  computed: {
    currentTenant() {
      return this.$store.state.currentTenant;
    },
  },
  //getCurrentTenant
  mounted() {
    console.log("mounted ", this.$store.state.currentTenant);
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