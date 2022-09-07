<template>
  <span>
    <input
      type="checkbox"
      id="checkbox"
      class="checkbox"
      :value="exercice.done"
      @click="$emit('checked', {id: exercice.id, done: exercice.done})"
    />
  </span>
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
