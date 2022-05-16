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
        <v-text-field
          label="Phone number 2"
          v-model="phoneNumber2"
          prepend-icon="mdi-pencil"
        >
        </v-text-field>
        <v-text-field
          label="Phone number 3"
          v-model="phoneNumber3"
          prepend-icon="mdi-pencil"
        >
        </v-text-field>
        <v-text-field
          label="Phone number 4"
          v-model="phoneNumber4"
          prepend-icon="mdi-pencil"
        >
        </v-text-field>
        <v-text-field
          label="Phone number 5"
          v-model="phoneNumber5"
          prepend-icon="mdi-pencil"
        >
        </v-text-field>
        <v-btn text @click="submit">Save</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
data() {
    return {
      flat: "",
      name: "",
      email: "",
      phoneNumber1: "",
      phoneNumber2: "",
      phoneNumber3: "",
      phoneNumber4: "",
      phoneNumber5: "",
    };
  },
  methods: {
    submit() {
      console.log(this.name, this.email);
      const tenant = {
        flat: this.flat,
        name: this.name,
        email: this.email,
        phoneNumber1: this.phoneNumber1,
        phoneNumber2: this.phoneNumber2,
        phoneNumber3: this.phoneNumber3,
        phoneNumber4: this.phoneNumber4,
        phoneNumber5: this.phoneNumber5,
      };
      console.log(tenant);
    },
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