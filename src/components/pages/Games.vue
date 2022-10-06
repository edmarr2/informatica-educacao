<template>
  <div>
    <div v-if="kidSelected" class="selected">
      <div v-for="(game, index) in kidSelected.games" :key="index">
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="game.url"
          width="75%"
          height="500"
          allowfullscreen
        ></b-embed>
      </div>
    </div>
    <div v-else>
      Lamentamos, nenhum jogo cadastrado ainda
    </div>
  </div>
</template>

<script>
import kidsService from "@/services/kids.js";
export default {
  name: "Home",
  mounted() {
    const gameId = Number(this.$route.params.gameId)
    if (gameId) {
      this.kidSelected = this.kids.find(kid => kid.id == this.$route.params.gameId)
    }
  },
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
    width: 100vw;
    height: 100vh; 
    margin-top: 25px;
}
@media screen and (max-width: 900px) {
  .selected  {
      grid-template-columns: 1fr;
  }
} 
</style>
