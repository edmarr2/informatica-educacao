<template>
  <div class="text-description">
    <description-bold>
      {{ kids.title }}
    </description-bold>
    <image-component :image="kids.url" :alt="kids.alt" :data-index="kids.id" class="imageComponent"/>
  </div>
</template>

<script>
import DescriptionBold from "@/components/atoms/DescriptionBold";
import ImageComponent from "@/components/atoms/Image";
export default {
  name: "DescriptionExecices",
  components: {
    DescriptionBold,
    ImageComponent
  },
  props: {
    kids: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.imageComponent {
  display: flex; 
  justify-content: 'end'
}
.text-description {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
