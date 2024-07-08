<template>
  <div id="app">
    <LoginView v-if="view === 0" @logged="navigate(4)" />
    <ValidatingView v-if="view === 1" @goBack="navigate(4)" />
    <PrintView v-if="view === 2" @goBack="navigate(4)" />
    <ReportView v-if="view === 3" @goBack="navigate(4)" />
    <LocalMenu
      v-if="view === 4"
      @logout="logout"
      :navigationHandle="navigate"
    />
  </div>
</template>

<script>
import LoginView from "./components/LoginView.vue";
import ValidatingView from "./components/ValidatingView.vue";
import PrintView from "./components/PrintView.vue";
import ReportView from "./components/ReportView.vue";
import LocalMenu from "./components/LocalMenu.vue";
import { linearAlert } from "./utils/swalAlerts";

export default {
  name: "App",
  components: {
    PrintView,
    LoginView,
    ValidatingView,
    LocalMenu,
    ReportView,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0rem 2rem;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
