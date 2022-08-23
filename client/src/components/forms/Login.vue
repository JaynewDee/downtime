<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { server } from "@/utils/urls";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      authenticated: false,
      errorMessage: "",
    };
  },
  methods: {
    async submitLogin() {
      await axios
        .post(server.baseURL + "users/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.access_token);
          if (res.data !== false) {
            this.authenticated = true;
            this.resetForm();
            this.$router.push(`/`);
          } else {
            this.authenticated = false;
            this.triggerError("AUTHENTICATION FAILED");
          }
        });
    },
    triggerError(message: string) {
      this.errorMessage = message;
      setTimeout(() => {
        this.errorMessage = "";
      }, 3000);
    },
    resetForm() {
      this.email = "";
      this.password = "";
    },
  },
});
</script>

<template>
  <section>
    <h2>AUTHENTICATION</h2>
    <h6 v-if="errorMessage">{{ errorMessage }}</h6>
    <form>
      <label>E-Mail</label>
      <input v-model="email" type="text" />
      <label>Password</label>
      <input v-model="password" type="password" />
      <button type="submit" class="submitBtn" @click.prevent="submitLogin">
        ENTER
      </button>
    </form>
    <p class="form-switch">
      Don't have an account yet? No problem. Click
      <router-link to="/auth/signup">HERE</router-link> to get signed up.
    </p>
  </section>
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
