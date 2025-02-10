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

<script lang= "ts">
export default {
  name: "HeaderWelcome",
  data(){
    return{
      user: 'admin'
    }
  }
};
</script>

<style scoped>
.header-welcome {
  background-color: #fcfcfc;
  color: rgb(0, 0, 0);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}
</style>
