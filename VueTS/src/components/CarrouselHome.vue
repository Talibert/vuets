<template>
  <Carousel v-bind="config">
    <Slide v-for="item in itens" :key="item.id">
      <div class="slide-container">
<!--        <h3>{{ item.name }}</h3>-->
        <img :src="item.url" :alt="item.name" />
      </div>
    </Slide>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { ref } from 'vue';

const itens = ref([
  {
    id: 1,
    name: "Image 1",
    url: new URL('@/assets/images/image1.png', import.meta.url).href,
  },
  {
    id: 2,
    name: "Image 2",
    url: new URL('@/assets/images/image2.png', import.meta.url).href,
  },
  {
    id: 3,
    name: "Image 3",
    url: new URL('@/assets/images/image3.png', import.meta.url).href,
  },
  {
    id: 4,
    name: "Image 4",
    url: new URL('@/assets/images/image4.png', import.meta.url).href,
  },
]);

/**
 * esse objeto de config é utilizado para setar as informações do carrousel
 */
const config = {
  height: 300,
  itemsToShow: 1,
  gap: 10,
  autoplay: 1500,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
</script>

<style scoped>
.slide-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

img {
  border-radius: 12px;
  width: 100%;
  height: auto;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

h3 {
  //color: #ffffff;
  margin-bottom: 10px;
}
</style>
