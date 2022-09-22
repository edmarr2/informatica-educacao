<template>
  <div>
      <div>
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="game.url"
          width="75%"
          height="300"
          allowfullscreen
        ></b-embed>
      </div>
    </div>
  </div>
</template>

<script>
import kidsService from "@/services/kids.js";
export default {
  name: "Home",
  data() {
    return {
      kids: kidsService,
      kidSelected: null
    }
  },

};
</script>

<style scoped>
  .selected {
    display: grid; 
    grid-template-columns: 1fr 1fr;
    margin-top: 25px;
}
@media screen and (max-width: 900px) {
  .selected  {
      grid-template-columns: 1fr;
  }
} 
</style>
