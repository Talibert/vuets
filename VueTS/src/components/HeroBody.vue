<template>
    <div :class="vitrineClass">
      <div v-for="item in itens" 
            :key="item.id" 
            class="image-item">
        <h3>{{ item.name }}</h3>
        <img :src="item.url" :alt="item.name" />
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: "HeroBody",

  data() {
    return {
      itens: [
        {
          id: 1,
          name: "Image 1",
          url: new URL('@/assets/images/image1.png', import.meta.url).href
        },
        {
          id: 2,
          name: "Image 2",
          url: new URL('@/assets/images/image2.png', import.meta.url).href
        },
        {
          id: 3,
          name: "Image 3",
          url: new URL('@/assets/images/image3.png', import.meta.url).href
        },
        {
          id: 4,
          name: "Image 4",
          url: new URL('@/assets/images/image4.png', import.meta.url).href
        }
      ],

      vitrineClass: "vitrine",
    };
  }
};

</script>

<style scoped>
.vitrine{
  display: flex;
  padding: 20px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.image-item {
  text-align: center;
  width: 200px;
}

.image-item img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10%;
}
</style>
