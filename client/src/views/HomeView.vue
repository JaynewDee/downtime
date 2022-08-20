<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      greeting: "",
    };
  },
  methods: {
    async fetchServerRoot() {
      const rootResponse = await this.axios.get("http://localhost:3000/");
      console.log(rootResponse);
      this.greeting = rootResponse.data;
    },
  },
});
</script>

<template>
  <h2>HOME</h2>
  <h5>{{ greeting }}</h5>
  <button @click.prevent="fetchServerRoot">GET GREETING</button>
</template>

<style></style>
