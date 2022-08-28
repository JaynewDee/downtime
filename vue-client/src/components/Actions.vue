<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    endSession() {
      localStorage.removeItem("token");
      window.location.replace("/");
    },
  },
});
</script>

<template>
  <section class="action-container">
    <a class="action-btn" @click="endSession">LOGOUT</a>
  </section>
</template>

<style>
.action-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  text-align: right;
}
.action-btn {
}
.action-btn:hover {
  color: green;
  font-style: italic;
}
</style>
