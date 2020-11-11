<template>
  <div class="form-address">
    <label for="cep">
      CEP
      <input id="cep" type="text" placeholder="Ex: 12345000" />
    </label>
    <label for="address">
      Endereço
      <input id="address" type="text" placeholder="Endereço" />
    </label>
    <label for="number">
      Número da Residência
      <input id="number" type="text" placeholder="número ou s/n" />
    </label>
    <label for="complement">
      Complemento (opcional)
      <input
        id="complement"
        type="text"
        placeholder="Apartamento, sala, conjunto, edifício, andar, etc..."
      />
    </label>
    <label for="neighborhood">
      Bairro
      <input id="neighborhood" type="text" placeholder="" />
    </label>
    <label for="city">
      Cidade
      <input id="city" type="text" placeholder="" />
    </label>
    <label for="state">
      Estado
      <input id="state" type="text" placeholder="" />
    </label>
    <button>Denunciar</button>
  </div>
</template>

<script>
export default {}
</script>
