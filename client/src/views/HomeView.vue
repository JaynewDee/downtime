<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      domainField: "",
    };
  },
  methods: {
    submitDomain() {
      console.log("Domain submit successful");
    },
  },
});
</script>

<template>
  <main>
    <h1>HOME</h1>
  </main>
</template>

<style>
.domainInput {
  margin-top: 11rem;
}
</style>
