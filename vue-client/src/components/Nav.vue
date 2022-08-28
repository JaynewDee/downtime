<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  data() {
    return {
      errorMsg: "",
      loggedIn: false,
    };
  },
  mounted() {
    const tokenPresent = localStorage.getItem("token");
    if (tokenPresent) {
      this.loggedIn = true;
    }
  },
  methods: {
    returnHome() {
      window.location.replace("/");
    },
    endSession() {
      localStorage.removeItem("token");
      this.loggedIn = false;
    },
    validate() {
      if (!this.loggedIn) {
        this.errorMsg = "The user must first complete authentication.";
        setTimeout(() => {
          this.errorMsg = "";
        }, 3000);
      }
    },
  },
});
</script>

<template>
  <h3 class="logo-header">
    <div>
      <button class="logo-home">^</button>
    </div>
  </h3>
  <div v-if="errorMsg" class="err-msg">{{ errorMsg }}</div>
  <nav>
    <ul>
      <router-link class="route-link" to="/" v-if="loggedIn">Home</router-link>
      <router-link class="route-link" to="/auth/login" v-else
        >Authenticate</router-link
      >

      <router-link class="route-link" to="/monitor" @click="validate"
        >Monitor</router-link
      >
      <router-link class="route-link" to="/report" @click="validate"
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
  padding-right: 3rem;
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
  font-size: 1rem;
  filter: drop-shadow(0rem 0rem 0.66rem rgb(12, 68, 20));
  border: none;
  border-bottom: 3px solid rgb(12, 68, 20);
  transform: rotate(-45deg);
  transition: all 0.3s;
}
.logo-home:hover {
  transform: translate(-2px, -2px) scale(1.1) rotateZ(135deg);
}
.err-msg {
  position: absolute;
  right: 5rem;
}
@media screen and (max-width: 800px) {
  ul {
    flex-flow: column wrap;
    width: 33vw;
    text-align: right;
  }
}
</style>
