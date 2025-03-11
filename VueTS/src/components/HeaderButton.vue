<template>
  <button class="header-button">
      {{ label }}
  </button>
</template>

<script setup lang="ts">

defineProps({
  label: {
    type: String,
    default: "Clique aqui",
  },
})

</script>

<style scoped>
.header-button {
  background-color: #fcfcfc;
  color: rgb(0, 0, 0);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}
.header-button:hover {
  background-color: #45a049;
}
</style>
