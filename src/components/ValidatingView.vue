<template>
  <div class="bg-secondary p-3 m-3 rounded">
    <h3 class="text-center text-white fw-bold">Validación de Pesaje</h3>
    <div class="row mt-1">
      <div class="col">
        <div class="row">
          <label class="mb-2 text-white fw-bold">Ciclo</label>
          <div class="col">
            <input type="text" class="form-control" />
          </div>
          <label class="mb-2 text-white fw-bold">Numero de Registro</label>
          <div class="col">
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
    </div>

    <div class="m-3 text-center">
      <button type="button" class="btn btn-primary btn-lg me-2">
        Verificar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    weightTruck() {},
  },
};
</script>

<style>
</style>