<template>
  <div class="hero">
    <AdviceComponent/>
    <CarrouselHome/>
  </div>
</template>

<script setup lang="ts">
import CarrouselHome from './CarrouselHome.vue';
import AdviceComponent from '@/components/AdviceComponent.vue'

</script>

<style scoped>
.hero{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 800px;
  //background-color: #8f3333;
}

/* Os filhos do .hero ocuparão 50% cada */
.hero > * {
  flex: 1;
  max-width: 50%;
  height: 100%;
  box-sizing: border-box; /* Para respeitar padding/border */
}
</style>
