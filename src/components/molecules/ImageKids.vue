<template>
  <div>
      <image-component :image="kids.url" :class="classImage" :data-index="index" />
  </div>
</template>
<script>
import ImageComponent from "@/components/atoms/Image";

export default {
  name: "ImageEquipament",
  props: {
    kids: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  components: {
    "image-component": ImageComponent,
  },
  computed: {
    classImage() {
      return !this.kids.active && 'image-kids-off';
    },
  },
};
</script>
<style scoped>
.list{
  display: block;
  grid-template-columns: 1fr;
}
.image-kids-off {
    filter: none;
    -webkit-filter: grayscale(100%);
    -webkit-transition: all 0.8s linear;
    -moz-transition: all 0.8s linear;
    transition: all 0.8s linear;
}
</style>
