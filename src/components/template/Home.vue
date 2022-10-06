<template>
  <div>
    <title-with-description
      :title="title"
      :description="description"
    />
    <card-component :kids="kids" />
  </div>
</template>

<script>
import TitleWithDescription from "@/components/molecules/TitleWithDescription";
import CardComponent from "@/components/organisms/Card";

export default {
  name: "Home",
  props: {
    title: String,
    description: String,
    kids: Array,
  },
  components: {
    TitleWithDescription,
    CardComponent
  },
};
</script>

