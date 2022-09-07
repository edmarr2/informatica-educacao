<template>
  <div class="action-description">
    <checkbox-component :kids="kids" @checked="handleUpdate" />
    <image-component :image="image" :classImage="classImage" />
  </div>
</template>

<script>
import ButtonOverlay from "@/components/atoms/ButtonOverlay";
import ImageComponent from "@/components/atoms/Image";
import CheckboxComponent from "@/components/atoms/Checkbox";
export default {
  name: "CheckboxWithButtonOverlayWithImage",
  components: {
    "button-overlay": ButtonOverlay,
    "image-component": ImageComponent,
    "checkbox-component": CheckboxComponent,
  },
  props: {
    kids: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    classImage: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleUpdate(e) {
      this.$emit("update", e);
    },
  },
};
</script>

<style scoped>
.action-description {
  display: grid;
  align-items: center;
  justify-content: end;
  gap: 2px;
  padding-right: 10px;
}
</style>
