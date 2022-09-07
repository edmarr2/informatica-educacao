<template>
  <div>
      <Home :title="title" 
            :description="description" 
            :kids="kids"
            :checkedExercises="checkedExercises" />
  </div>
</template>

<script>
import Home from '@/components/template/Home'
import kidsService from "@/services/kids.js";
export default {
  name: "HomePage",
  data() {
    return {
      title: "Informática na Educação",
      description: "Bem vindos",
      kids: kidsService,
      checkedExercises: [],
    };
  },
  components: {
    Home
  },

};
</script>
