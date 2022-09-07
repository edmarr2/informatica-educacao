<template>
  <div>
    <div class="text-description">
      <description-bold>
        {{ kids.title }}
      </description-bold>
      <image-component :image="kids.url" :alt="kids.alt" :data-index="kids.id" class="imageComponent"/>
    </div>
    <carrousel-with-modal :numberKids="kids.id" :iframeUrl="kids.iframeUrl" :subtitle="kids.subtitle" :description="kids.description"/>
  </div>
</template>

<script>
import DescriptionBold from "@/components/atoms/DescriptionBold";
import ImageComponent from "@/components/atoms/Image";
import CarrouselWithModal from "@/components/molecules/CarrouselWithModal";

export default {
  name: "DescriptionExecices",
  components: {
    DescriptionBold,
    ImageComponent,
    CarrouselWithModal
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
.font-size-12 {
  font-size: 12px;
}
.imageComponent {
  display: flex; 
  justify-content: end
}
.text-description {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
