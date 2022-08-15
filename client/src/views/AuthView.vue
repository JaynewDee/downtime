<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      firstName: "",
      username: "",
      password: "",
      firstVisit: true,
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
    <form v-if="firstVisit">
      <input v-model="username" type="text" />
      <input v-model="password" type="password" />
      <button @click.prevent="submitLogin">=></button>
    </form>
    <form v-else>
      <input v-model="firstName" type="text" />
      <input v-model="username" type="text" />
      <input v-model="password" type="password" />
      <button @click.prevent="submitSignup">=></button>
    </form>
    <div>{{ (username, password) }}</div>
  </section>
</template>
