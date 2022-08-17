<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<template>
  <header class="header">
    <Nav />
  </header>
  <main>
    <router-view />
  </main>
</template>

<style>
main {
  margin: 3rem 0;
  padding: 0 10%;
  font-size: 24px;
}
h2 {
  font-style: italic;
}
.header {
  margin-bottom: 3rem;
}
form {
  margin-left: 3rem;
}
</style>
