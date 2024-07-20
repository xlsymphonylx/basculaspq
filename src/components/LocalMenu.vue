<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center gap-3 m-auto border p-4 rounded bg-white shadow"
  >
    <h3 class="text-center text-dark fw-bold">MENU</h3>
    <button
      class="btn btn-lg btn-primary w-100"
      @click="() => navigationHandle(1)"
    >
      Pesaje (En Progreso)
    </button>
    <button
      class="btn btn-lg btn-primary w-100"
      @click="() => navigationHandle(3)"
    >
      Anular Pesaje</button
    ><button
      class="btn btn-lg btn-primary w-100"
      @click="() => navigationHandle(2)"
    >
      Generación de Ticket</button
    ><button class="btn btn-lg btn-danger w-100" @click="logoutHandle">
      Cerrar Sesión
    </button>
  </div>
</template>

<script>
export default {
  props: {
    navigationHandle: {
      type: Function,
      default: () => ({}),
    },
  },
  methods: {
    logoutHandle() {
      this.$emit("logout");
    },
  },
};
</script>

<style>
</style>