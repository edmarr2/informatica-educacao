<template>
  <div>
    <title-with-description
      :title="title"
      :description="description"
    />
    <div class="grid">
      <div
        class="card green"
        v-for="(kid, index) in kids"
        :key="index"
      >
        <div class="description">
          <description-execices :kids="kid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleWithDescription from "@/components/molecules/TitleWithDescription";
import DescriptionExecices from "@/components/organisms/DescriptionExecices";
export default {
  name: "Home",
  data() {
    return {
    }
  },
  props: {
    title: String,
    description: String,
    kids: Array,
    checkedExercises: Array,
  },
  components: {
    "title-with-description": TitleWithDescription,
    "description-execices": DescriptionExecices,
  },
  methods: {
    updateCheckedExercises(e) {
      console.log(e)
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
.card {
  border-radius: 10px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  transition: all 0.3s ease-out;
  height: fit-content;
}
.card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}
.green {
  border-left: 3px solid #3bb54a;
}

.description {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-around;
  padding: 2%;
}

.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active,
.collapsible:hover {
  background-color: #ccc;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
@media (min-width: 100px) and (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
