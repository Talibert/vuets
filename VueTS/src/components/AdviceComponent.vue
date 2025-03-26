<template>
  <div class="advice" v-if="apiResponse.loading">
    <p>
      Buscando conselho...
    </p>
  </div>
  <div class="advice" v-else>
    <div class="title-advice">
      <p>Your advice:</p>
    </div>
    <div class="content-advice">
      <p v-if="!apiResponse.error">
        {{ advice }}
      </p>
      <p v-else>
        {{ apiResponse.error }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@/Composables/useFetch.ts'
import type { Advice } from '@/types/Advice.ts'
import { ref, watch } from 'vue'

const apiResponse = useFetch<Advice>('https://api.adviceslip.com/advice');

const advice = ref<string | null>(null);

// Vai observar a mudança na resposta e atualizar o advice
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
.advice {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center;    /* Centraliza verticalmente */
  text-align: center;     /* Centraliza o texto com múltiplas linhas */
  height: 100%;           /* Ocupa toda a altura disponível */
  width: 100%;            /* Ocupa toda a largura disponível */
  box-sizing: border-box;
}

.advice p {
  font-size: 36px;
  font-weight: bold;
  color: #333;
}

.content-advice {
  padding: 50px;
}
</style>
