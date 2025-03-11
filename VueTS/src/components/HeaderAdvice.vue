<template>
  <div class="header-advice">
    <p>
      {{ advice?.slip.advice }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Advice } from '@/types/Advice.ts'

const advice = ref(<Advice | undefined>undefined)

onMounted(async () => {
  advice.value = await getAdvice()
})

const getAdvice = async (): Promise<Advice> => {
  const req = await fetch('https://api.adviceslip.com/advice')
  return await req.json()
}
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
