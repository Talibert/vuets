<template>
  <header class="header">
    <div class="header-title">
      <HeaderWelcome/>
    </div>
    <div class="header-buttons">
      <HeaderButton v-for="item in menus" :key="item.id" :item="item"/>
    </div>

  </header>
</template>

<script setup lang="ts">

const menus = [
  { id: 1, nome: "Home", path: "/"},
  { id: 2, nome: "About", path: "/about"},
  { id: 2, nome: "Login", path: "/login"}
]

// Importação dos componentes filhos
import HeaderButton from "./HeaderButton.vue";
import HeaderWelcome from "./HeaderWelcome.vue";

</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, #2b6b56, #ffffff);
  padding: 0 20px;
  height: 100px;
}

.header-title{
  margin-right: auto;
}

.header-buttons {
  display: flex;;
  padding: 15px;
  gap: 20px;
}
</style>
