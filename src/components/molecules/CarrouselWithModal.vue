<template>
  <div>
    <div class="d-flex align-items-start justify-content-end">
        <b-button class="btn-warning" 
                    id="show-btn" 
                    @click="$bvModal.show(nameModal)">Jogar</b-button>
    </div>
    <b-modal :id="nameModal" hide-footer>
        <form-wizard :title="subtitle" :subtitle="description" :nextButtonText="'Próximo'" :backButtonText="'Voltar'" @on-complete="() => $bvModal.hide(nameModal)" :finishButtonText="'Finalizar'">
            <div v-for="iframe in iframeUrl" :key="iframe.position"> 
                <tab-content :title="iframe.title">
                    <b-embed
                        type="iframe"
                        aspect="16by9"
                        :src="iframe.url"
                        width="100%"
                        height="300px"
                        allowfullscreen
                    ></b-embed>
                </tab-content>
            </div>
        </form-wizard>
    </b-modal>
  </div>
</template>

<script>

export default {
    name: "CarrouselWithModal",
    props: {
        numberKids: Number,
        iframeUrl: Array,
        subtitle: String,
        description: String
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
