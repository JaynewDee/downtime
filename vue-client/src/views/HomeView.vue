<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      greeting: "",
      users: [],
    };
  },
  created() {
    if (!localStorage.getItem("token")) {
      window.location.replace("/auth/login");
    }
  },
  methods: {
    async fetchServerRoot() {
      const rootResponse = await this.axios.get("http://localhost:3000/");
      console.log(rootResponse);
      this.greeting = rootResponse.data;
    },
    async revealUsers() {
      const users = await this.axios
        .get("http://localhost:3000/users")
        .then((data) => {
          console.log(data.data);
          this.users = data.data;
        })
        .then(() => {
          this.getLocalUsers();
        });
      return users;
    },
    getLocalUsers() {
      console.log(this.users);
      return this.users;
    },
    clear() {
      this.users = [];
      this.greeting = "";
    },
  },
});
</script>

<template>
  <h2>HOME</h2>
  <button @click.prevent="fetchServerRoot">GET GREETING</button>
  <button @click.prevent="revealUsers">REVEAL USERS</button>
  <button @click.prevent="clear">CLEAR</button>
  <h5>{{ greeting }}</h5>
  <hr class="hr-lg" />
  <h5 v-if="users[1]">USERS</h5>
  <div v-for="user in users">
    <hr class="hr-md" />
    <h6>Chosen Name:</h6>
    <p>{{ user["chosenName"] }}</p>
    <hr class="hr-sm" />
    <h6>email:</h6>
    <p>{{ user["email"] }}</p>
    <hr class="hr-sm" />
    <h6>User ID:</h6>
    <p>{{ user["_id"] }}</p>
  </div>
</template>

<style scoped>
.hr-lg {
  height: 5px;
  background-color: rgba(0, 0, 0, 0.5);
}
.hr-md {
  height: 3px;
}
.hr-sm {
  height: 1px;
  max-width: 33%;
}
h6 {
  color: lightseagreen;
}

h5 {
  text-align: center;
}
</style>
