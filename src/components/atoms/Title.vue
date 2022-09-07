<template>
  <div>
    <h1 :style="{fontSize: '28px', marginTop: '15px'}">{{title}}</h1>
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
