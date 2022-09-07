<template>
  <a class="open-overlay" @click="exercice.active = !exercice.active">
    <slot />
  </a>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    exercice: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.checkbox {
  width: 25px;
  height: 25px;
}
</style>
