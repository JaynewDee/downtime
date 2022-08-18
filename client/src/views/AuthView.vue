<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { server } from "@/utils/urls";

export default defineComponent({
  data() {
    return {
      firstName: "",
      username: "",
      password: "",
      signup: true,
    };
  },
  methods: {
    submitLogin() {
      console.warn("Login");
    },
    submitSignup() {
      axios.get(server.baseURL + `/auth/${this.username}`).then((data) => data);
    },
  },
});
</script>

<template>
  <section>
    <h2>AUTHENTICATION</h2>
    <form v-if="signup">
      <label>First Name</label>
      <input v-model="firstName" type="text" />

      <label>Username</label>
      <input v-model="username" type="text" />

      <label>Password</label>
      <input v-model="password" type="password" />
      <button type="submit" class="submitBtn" @click.prevent="submitSignup">
        =>
      </button>
    </form>
    <form v-else>
      <label>Username</label>
      <input v-model="username" type="text" />
      <label>Password</label>
      <input v-model="password" type="password" />
      <button type="submit" class="submitBtn" @click.prevent="submitLogin">
        =>
      </button>
    </form>
  </section>
</template>

<style>
label {
  font-size: 16px;
  margin-top: 0.5rem;
}
.submitBtn {
  margin-top: 1rem;
  width: 3rem;
}
</style>
