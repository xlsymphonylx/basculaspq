<template>
  <div id="app">
    <div class="content" v-if="isLoggedIn">
      <LoginView @logged="navigate" />
    </div>
    <NavBar @logout="logout" v-else>
      <div class="content">
        <router-view></router-view>
      </div>
    </NavBar>
  </div>
</template>

<script>
import LoginView from "./views/LoginView.vue";
import NavBar from "@/components/NavBar.vue";

import { linearAlert } from "./utils/swalAlerts";
export default {
  name: "App",
  components: {
    LoginView,
    NavBar,
  },
  data: () => ({
    isLoggedIn: false,
  }),
  methods: {
    async logout() {
      try {
        console.log("init logout");
        localStorage.setItem("username", undefined);
        localStorage.setItem("password", undefined);
        await linearAlert("Exito", "Sesión cerrada con exito", "success");
        this.$router.push("/");
        this.isLoggedIn = false;
        console.log("end logout");
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
        console.error(error);
      }
    },
    navigate() {
      this.isLoggedIn = true;
    },
  },
};
</script>

<style>
*::-webkit-scrollbar {
  width: 10px;
}

/* Track */
*::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
*::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background: #555;
}
body {
  width: 100vw !important;
  background-image: url("~/public/puerto-quetzal.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0rem 2rem;
  color: white;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: center;
  overflow: auto;
}
.content {
  max-width: 100%; /* Ensure content doesn't overflow horizontally */
  max-height: 100%; /* Ensure content doesn't overflow vertically */
  overflow: auto; /* Allow inner content to be scrollable if needed */
  margin: auto;
}
</style>
