<template>
  <div class="header-welcome"
    v-if="user === 'admin'">
    Bem vindo, backoffice!
  </div>
  <div class="header-welcome"
    v-else-if="user === 'professor'">
    Bem vindo, professor!
  </div>
  <div class="header-welcome"
    v-else>
    Bem vindo, aluno!
  </div>
</template>

<script setup lang= "ts">
import { ref } from "vue";

const user = ref<string>("admin");

</script>

<style scoped>
.header-welcome {
  background-color: #215342;
  color: rgb(255, 255, 255);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}
</style>
