<script lang="ts">
import { defineComponent } from "vue";

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
      console.warn("SignUp");
    },
  },
});
</script>
<template>
  <section>
    <h2>AUTHENTICATION</h2>
    <form v-if="signup">
      <input v-model="firstName" type="text" />
      <input v-model="username" type="text" />
      <input v-model="password" type="password" />
      <button type="submit" class="submitBtn" @click.prevent="submitSignup">=></button>
      <div>{{firstName}}</div>
    </form>
    <form v-else>
      <label>Username</label>
      <input v-model="username" type="text" />
      <label>Password</label>
      <input v-model="password" type="password" />
      <button type="submit" class="submitBtn" @click.prevent="submitLogin">=></button>
    </form>
    <div>{{ (username, password) }}</div>
  </section>
</template>

<style>
.submitBtn {
  width: 3rem;
}
</style>