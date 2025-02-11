<template>
  <div class="hero">
    <div :class="[titleClass, { 'title-bold': isItalic }]">
      Título teste Hero
    </div>
    <HeroBody/>
  </div>

</template>

<script setup lang="ts">
import HeroBody from './HeroBody.vue';
import { ref } from 'vue';

const titleClass = ref("title");
const isItalic = ref(true);

</script>

<style scoped>
.hero{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 400px;
  background-color: #1a9ea7;
}

.title{
  padding-bottom: 20px;
  font-size: 40px;
  color: black;
}

.title-bold{
  padding-bottom: 20px;
  font-size: 40px;
  font-style: italic;
  color: black;
}
</style>
