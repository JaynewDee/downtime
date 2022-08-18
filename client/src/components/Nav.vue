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
  <h3 class="logo-header">
    <div>
      <button @click="returnHome" class="logo-home">^</button>
    </div>
  </h3>

  <nav>
    <ul>
      <router-link class="route-link" to="/auth">Authenticate</router-link>
      <router-link class="route-link" to="/auth/:username/monitor"
        >Monitor</router-link
      >
      <router-link class="route-link" to="/auth/:username/report"
        >Report</router-link
      >
    </ul>
  </nav>
</template>

<style>
nav {
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-basis: 33%;
}

.route-link {
  text-decoration: none;
  font-size: 18px;
  padding: 0 3rem;
  filter: drop-shadow(0rem 0rem 1rem black);
  transition: all 0.33s;
  color: rgba(8, 97, 0, 0.9);
}
.route-link:hover {
  transform: scale(1.1);
}

.logo-home {
  background: none;
  margin: 3rem;
  filter: drop-shadow(0rem 0rem 0.66rem rgb(12, 68, 20));
  border-left: 3px solid rgb(12, 68, 20);
  border-right: 2px solid rgb(12, 68, 20);
  border-right: none;
  border-bottom: none;
}
.logo-home:hover {
  transform: translate(-2px, -2px) scale(1.1);
}

@media screen and (max-width: 800px) {
  ul {
    flex-flow: column wrap;
    width: 33vw;
    text-align: right;
  }
}
</style>
