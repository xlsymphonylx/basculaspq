<template>
  <div style="width: 100vw" class="mt-2">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow rounded">
      <div class="container-fluid">
        <div class="d-flex justify-content-center align-items-center">
          <img src="/favicon.png" alt="" style="max-height: 3rem" />
          <router-link
            class="navbar-brand ms-2"
            tag="a"
            to="/"
            style="cursor: pointer"
            >PQ Pesajes</router-link
          >
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/reporte">Reporte</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/pesaje">Pesaje</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/anular-pesaje"
                >Anulación de Pesaje</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ticket"
                >Generacion de Ticket</router-link
              >
            </li>
          </ul>
          <li
            class="nav-item text-danger ms-auto my-2"
            style="list-style-type: none"
          >
            <div class="nav-link" @click="logoutHandle" style="cursor: pointer">
              Cerrar Sesión
            </div>
          </li>
        </div>
      </div>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    logoutHandle() {
      console.log("logout handle");
      this.$emit("logout");
    },
  },
};
</script>

<style></style>
