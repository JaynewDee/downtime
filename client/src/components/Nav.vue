<script lang="ts">
export default {
  data() {
    return {};
  },
  methods: {
    returnHome() {
      window.location.replace("/");
    },
  },
};
</script>

<template>
  <h3>
    <div><button @click="returnHome" class="logo-home">O</button></div>
  </h3>

  <nav>
    <ul>
      <router-link class="route-link" to="/auth">Authenticate</router-link>
      <router-link class="route-link" to="/user/:username/monitor"
        >Monitor</router-link
      >
      <router-link class="route-link" to="/user/:username/report"
        >Report</router-link
      >
    </ul>
  </nav>
</template>

<style>
nav {
  display: flex;
  justify-content: flex-end;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  min-width: 50%;
  font-weight: 100;
}

.route-link {
  text-decoration: none;
  color: white;
  filter: drop-shadow(0rem 0rem 1rem black);
  transition: all 0.33s;
}
.route-link:hover {
  font-size: 16px;
}
.logo-home {
  background: none;
  color: white;
  border: white;
  font-size: 24px;
  filter: drop-shadow(0rem 0rem 0.66rem rgb(69, 178, 255));
}

@media screen and (max-width: 800px) {
  ul {
    flex-flow: column wrap;
    width: 33vw;
    text-align: right;
  }
}
</style>
