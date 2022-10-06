<template>
  <div>
      <img :src="image" :alt="alt"  class="image-kids"/>
  </div>
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: String,
  }
};
</script>

<style scoped>
.image-kids {
  min-width: auto;
  height: 20vh;
  overflow: hidden;
  margin-bottom: 5px;
}
@media screen and (max-width: 800px) {
    .image-kids {
      height: 14vh;
    }
} 
@media (min-width: 100px) and (max-width: 700px) {
  .image-kids {
    height: auto;
    width: 60vw;
    min-height: 50%;
    max-width: 100%;
  }
}
</style>
