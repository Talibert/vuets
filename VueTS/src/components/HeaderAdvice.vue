<template>
  <div v-if="apiResponse.loading"> Carregando</div>
  <div class="header-advice" v-else>
    <p v-if="!apiResponse.error">
      {{ advice }}
    </p>
    <p v-else>
      {{ apiResponse.error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@/Composables/useFetch.ts'
import type { Advice } from '@/types/Advice.ts'
import { ref, watch } from 'vue'

const apiResponse = useFetch<Advice>('https://api.adviceslip.com/advice');

const advice = ref<string | null>(null);

watch(
  () => apiResponse.value.response,
  (newResponse) => {
    if (newResponse) {
      advice.value = newResponse.slip.advice;
    } else {
      advice.value = null;
    }
  }
);

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
