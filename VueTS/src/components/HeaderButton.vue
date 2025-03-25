<template>
  <RouterLink :to="item.path">
    <button class="header-button">
      {{ item.nome }}
    </button>
  </RouterLink>
</template>

<script setup lang="ts">

defineProps<{
  item: {
    id: number,
    nome: string,
    path: string }
}>()

</script>

<style scoped>
.header-button {
  background-color: #215342;
  color: rgb(255, 255, 255);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}
.header-button:hover {
  background-color: #458ea0;
}
</style>
