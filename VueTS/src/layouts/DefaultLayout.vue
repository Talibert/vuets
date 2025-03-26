<template>
  <div class="layout">
    <HeaderComponent />
    <main class="main">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">

/**
 * Um DefaultLayout serve para criar um layout padrão que pode ser utilizado nas rotas desejadas
 * A ideia aqui é exibir o esquema de:
 * - Cabeçalho
 * - View
 * - Rodapé
 */

import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
}

.main {
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
}

footer {
  background-color: #5ceabf;
  padding: 10px;
  text-align: center;
}
</style>
