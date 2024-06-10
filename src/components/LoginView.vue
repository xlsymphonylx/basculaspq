<template>
  <div class="login-container">
    <h3 class="text-center">Inicio de Sesión</h3>
    <div class="mb-3">
      <label class="form-label">Usuario</label>
      <input type="text" class="form-control" v-model="username" />
    </div>
    <div class="mb-3">
      <label class="form-label">Contraseña</label>
      <input type="password" class="form-control" v-model="password" />
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-success btn-lg" @click="test">
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
        const response = await authService.login({ username, password });
        await linearAlert("Exito", "Ingresado con exito", "success");
        console.log("response", response);
        this.$emit('logged')
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
  background-color: rgb(57, 61, 71);
  padding: 2rem;
  max-width: 50rem;
  min-width: 20rem;
  margin: 4rem;
}
</style>