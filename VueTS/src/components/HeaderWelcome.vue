<template>
  <div class="header-welcome"
    v-if="user === 'admin'">
    Welcome, admin!
  </div>
  <div class="header-welcome"
    v-else-if="user === 'professor'">
    Welcome, mister!
  </div>
  <div class="header-welcome"
    v-else>
    Welcome, student!
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
