<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {},
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
  <form>
    <label>Add a domain to watch:</label>
    <input v-model="domainField" type="text" />
    <button class="domainInput" @click.prevent="submitDomain">=></button>
  </form>
</template>

<style>
form {
  display: flex;
  flex-flow: column nowrap;
  max-width: 66%;
}
.domainInput {
  margin-top: 1rem;
}
</style>
