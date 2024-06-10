<template>
  <div id="app">
    <LoginView v-if="view === 0" @logged="() => (view = 1)" />
    <PrintView v-if="view === 1" />
  </div>
</template>

<script>
import LoginView from "./components/LoginView.vue";
// import ValidatingView from "./components/ValidatingView.vue";
import PrintView from "./components/PrintView.vue";

export default {
  name: "App",
  components: {
    PrintView,
    LoginView,
  },
  data: () => ({
    view: 0,
  }),
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
