<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { server } from "@/utils/urls";

export default defineComponent({
  data() {
    return {
      chosenName: "",
      email: "",
      password: "",
      authenticated: false,
      errorMessage: "",
    };
  },
  methods: {
    async submitSignup() {
      const data = await axios.post(server.baseURL + `users/create`, {
        chosenName: this.chosenName,
        email: this.email,
        password: this.password,
      });
      if (!data.data) {
        this.errorMessage = "Failed to retrieve User";
      } else {
        this.resetError();
        this.resetForm();
        window.location.replace(`/auth/${data.data.email}/monitor`);
      }
    },
    resetForm() {
      this.chosenName = "";
      this.email = "";
      this.password = "";
    },
    resetError() {
      this.errorMessage = "";
    },
  },
});
</script>

<template>
  <h2>AUTHENTICATION</h2>
  <div v-if="errorMessage">{{ errorMessage }}</div>
  <form method="post">
    <label>Chosen Name</label>
    <input v-model="chosenName" type="text" />

    <label>E-Mail</label>
    <input v-model="email" type="text" />

    <label>Password</label>
    <input v-model="password" type="password" />
    <button
      @click.prevent="submitSignup"
      type="submit"
      value="submit"
      class="submitBtn"
    >
      SUBMIT
    </button>
  </form>
  <p class="form-switch">
    Returning user? Click <router-link to="/auth/login">HERE</router-link> to
    login.
  </p>
</template>

<style>
form {
  margin: 3rem auto;
}
form > button {
  font-family: var(--montserrat-thin);
  min-width: 33%;
}
.form-switch {
  max-width: 66%;
  text-align: right;
  margin-left: auto;
  font-size: 1rem;
}
label {
  font-size: 16px;
  margin-top: 0.5rem;
}
.submitBtn {
  margin-top: 1rem;
  width: 3rem;
}
</style>
