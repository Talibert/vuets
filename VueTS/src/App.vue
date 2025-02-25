<template>
  <div id="app">
    <HeaderComponent />
    <HeroComponent />
    <FormUser/>
  </div>
</template>

<script lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import FormUser from './components/FormUser.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroComponent,
    FormUser
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>