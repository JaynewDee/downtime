<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./components/Nav.vue";
import Actions from "./components/Actions.vue";
import Actions from "./components/Actions.vue";
export default defineComponent({
  data() {
    return {
      loggedIn: false,
    };
  },
  components: {
    Nav,
    Actions,
    Actions,
  },
});
</script>

<template>
  <header class="header">
    <Actions />
    <Nav />
  </header>
  <main>
    <router-view />
  </main>
</template>

<style>
form {
  display: flex;
  flex-flow: column nowrap;
  max-width: 66%;
}
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
</style>
