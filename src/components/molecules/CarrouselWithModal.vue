<template>
  <div>
    <div class="d-flex align-items-start justify-content-end">
        <b-button class="btn-warning" 
                    id="show-btn" 
                    @click="$bvModal.show(nameModal)">Jogar</b-button>
    </div>
    <b-modal :id="nameModal" hide-footer>
            <b-embed
                type="iframe"
                aspect="16by9"
                :src="iframeUrl"
                width="100%"
                height="300px"
                allowfullscreen
            ></b-embed>
        <div class="d-flex justify-content-end">
            <b-button class="mt-3 btn-danger" block @click="$bvModal.hide('bv-modal-example-1')">Fechar</b-button>
        </div>
    </b-modal>
  </div>
</template>

<script>

export default {
    name: "CarrouselWithModal",
    props: {
        numberKids: Number,
        iframeUrl: String
    },
    computed: {
        nameModal() {
            return 'bv-modal-example-' + this.numberKids
        }
    },
methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
};
</script>

<style scoped>

</style>
