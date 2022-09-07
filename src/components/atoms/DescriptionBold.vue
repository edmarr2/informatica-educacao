<template>
  <h4 class="bold">
    <slot />
  </h4>
</template>

<script>
export default {
  name: "DescriptionBold",
};
</script>

<style scoped>
.bold {
  text-align: start;
  padding-left: 10px;
  padding-top: 35%;
  font-size: 18px;
  text-decoration: bold;
}
@media screen and (max-width: 900px) {
  .bold  {
    font-size: 14px;
  }
} 
@media screen and (max-width: 800px) {
  .bold  {
    font-size: 12px;
  }
} 
@media screen and (max-width: 700px) {
  .bold  {
    font-size: 18px;
  }
} 
</style>
