<template>
  <div >
    <image-component :image="kids.url" :classImage="classImage" :data-index="index" />
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
      return this.kids.active ? 'image-equipament' : 'image-equipament-off';
    },
  },
};
</script>
<style scoped>
.list{
  display: block;
  grid-template-columns: 1fr;
}
</style>
