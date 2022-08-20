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
  <div><h2>MONITORING</h2></div>
  <form>
    <label>Add a domain to watch:</label>
    <input v-model="domainField" type="text" />
    <button class="domainInput" @click.prevent="submitDomain">=></button>
  </form>
  <div>{{ domainField }}</div>
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
