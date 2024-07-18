<template>
  <div class="login-container shadow">
    <div class="m-auto p-3">
      <img
        src="/icono-neporsa.jpg"
        alt="Icono de Neporsa"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Usuario</label>
      <input type="text" class="form-control" v-model="username" />
    </div>
    <div class="mb-3">
      <label class="form-label">Contraseña</label>
      <input
        type="password"
        class="form-control"
        v-model="password"
        @keyup.enter="login"
      />
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-success btn-lg" @click="login">
        Acceder
      </button>
    </div>
  </div>
</template>

<script>
import authService from "@/services/authService";
import { linearAlert } from "@/utils/swalAlerts";
export default {
  data: () => ({
    username: "",
    password: "",
  }),

  methods: {
    async test() {
      await linearAlert("Exito", "Ingresado con exito", "success");
    },
    async login() {
      try {
        const { username, password } = this;
        await authService.login({ username, password });
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        await linearAlert("Exito", "Ingresado con exito", "success");
        this.$emit("logged");
      } catch (error) {
        await linearAlert("Error", error, "error", 3000, false);
        console.log(error);
      }
    },
  },
};
</script>

<style>
.login-container {
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 2rem;
  max-width: 50rem;
  min-width: 20rem;
  margin: auto;
}
</style>