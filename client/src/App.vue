<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <Nav />
    </div>
  </header>
  <body>
    <router-view />
  </body>
</template>

<style scoped>
.wrapper {
  height: 100px;
}
</style>
