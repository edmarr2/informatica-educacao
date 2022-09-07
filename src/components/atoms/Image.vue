<template>
  <div>
    <img :src="image" :class="classImage" :alt="alt" />
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
    classImage: {
      type: String,
      required: false,
      default: "image-equipament"
    },
  },
};
</script>

<style scoped>
.image-equipament {
  min-width: auto;
  height: 20vh;
  overflow: hidden;
  margin: 10px;
}

.button-image {
  width: 15px;
}
@media (min-width: 100px) and (max-width: 700px) {
  .image-equipament {
    height: auto;
    width: 60vw;
    min-height: 50%;
    max-width: 100%;
  }
}
</style>
