<template>
  <h2 :style="{fontSize: '24px', marginTop: '15px'}">{{ description }}</h2>
</template>

<script>
export default {
  name: "TitleWithDescription",
  props: {
    description: {
      type: String,
      required: true
    },
  },
};
</script>

<style scoped></style>
