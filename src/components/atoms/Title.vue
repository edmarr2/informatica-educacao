<template>
  <div>
    <VueSparkles color="hsl(112.7, 77.2%, 39.6%)">
      <h1 :style="{fontSize: '28px', marginTop: '15px'}">{{title}}</h1>
    </VueSparkles>
  </div>
</template>

<script>

export default {
  name: 'Title',
  props: {
      title: {
          type: String,
          required: true,
      }
  }
}
</script>

<style scoped>

</style>
