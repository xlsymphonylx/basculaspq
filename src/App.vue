<template>
  <div id="app">
    <div class="content">
      <LoginView v-if="view === 0" @logged="navigate(4)" />
      <WeightingView v-if="view === 1" @goBack="navigate(4)" />
      <PrintView v-if="view === 2" @goBack="navigate(4)" />
      <NullWeightView v-if="view === 3" @goBack="navigate(4)" />
      <LocalMenu
        v-if="view === 4"
        @logout="logout"
        :navigationHandle="navigate"
      />
    </div>
  </div>
</template>

<script>
import LocalMenu from "./components/LocalMenu.vue";
import LoginView from "./components/LoginView.vue";
import NullWeightView from "./components/NullWeightView.vue";
import PrintView from "./components/PrintView.vue";
import WeightingView from "./components/WeightingView.vue";
import { linearAlert } from "./utils/swalAlerts";
export default {
  name: "App",
  components: {
    WeightingView,
    LoginView,
    NullWeightView,
    LocalMenu,
    PrintView,
  },
  data: () => ({
    view: 0,
  }),
  methods: {
    async logout() {
      try {
        console.log("init logout");
        localStorage.setItem("username", undefined);
        localStorage.setItem("password", undefined);
        await linearAlert("Exito", "Sesión cerrada con exito", "success");
        this.view = 0;
        console.log("end logout");
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
        console.log(error);
      }
    },
    navigate(viewId) {
      this.view = viewId;
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
