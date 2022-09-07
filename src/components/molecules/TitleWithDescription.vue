<template>
  <div>
    <title-component :title="title" />
    <description-component :description="description" />
  </div>
</template>

<script>
import TitleComponent from "@/components/atoms/Title";
import DescriptionComponent from "@/components/atoms/Description";
export default {
  name: "TitleWithDescription",
  components: {
    "title-component": TitleComponent,
    "description-component": DescriptionComponent,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped></style>
