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
        @click="$bvModal.show(kid.title)"
        :key="index"
      >
        <div class="description">
            <div>
              <div class="text-description">
                <div class="title"> 
                  {{ kid.title }}
                </div>
                <div class="figure-image">
                    <figure class="swing">
                      <image-component :image="kid.url" :alt="kid.alt" :data-index="kid.id" class="imageComponent"/>
                    </figure>
                </div>
                <div style="display: flex; justify-content: center; align-items: center;">
                        <b-button class="font-size"
                          :style="'background-color:' + kid.colorButton + ';margin: 5px; border: none; width: 50%;'"
                          id="show-btn" 
                          @click="$bvModal.show(kid.title)">Jogar</b-button>
                </div>
              </div>
            </div>            
            <b-modal :id="kid.title" hide-footer>
              <form-wizard :title="kid.subtitle" 
                           :subtitle="kid.description" 
                           :nextButtonText="'Próximo'" 
                           :backButtonText="'Voltar'" 
                           @on-complete="onCompleted" 
                           :finishButtonText="'Vamos lá'">
                  <div v-for="(iframe, index) in kid.iframeUrl" :key="index+1"> 
                      <tab-content :title="iframe.title">
                          <b-embed
                              type="iframe"
                              :style="{zIndex: 1}"
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
      </div>
      <b-embed
          type="iframe"
          :style="{zIndex: 1}"
          aspect="16by9"
          src="https://embed.lottiefiles.com/animation/61324"
          width="100%"
          height="200px"
          allowfullscreen
      ></b-embed>
    </div>
  </div>
</template>

<script>
import TitleWithDescription from "@/components/molecules/TitleWithDescription";
import ImageComponent from "@/components/atoms/Image";

export default {
  name: "Home",
  props: {
    title: String,
    description: String,
    kids: Array,
    checkedExercises: Array,
  },
  components: {
    "title-with-description": TitleWithDescription,
    ImageComponent,
  },
  methods: {
    updateCheckedExercises(e) {
      console.log(e)
    },
    onCompleted() {
        this.$bvModal.hide(this.nameModal)
        console.log('cai aqui')
        this.$router.push(`games/${this.numberKids}`)
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  margin-top: 35px;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
.card {
  border-radius: 71% 29% 77% 23% / 0% 100% 0% 100% ;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  transition: all 0.3s ease-out;
  height: fit-content;
}
.card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}
.green {
  border-left: 3px solid #ff595e;
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

.font-size-12 {
  font-size: 12px;
}
.imageComponent {
  display: flex; 
  align-items: center;
  justify-content: center;
}
.text-description {
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
}
.swing {
    animation: swing ease-in-out 1s infinite alternate;
    transform-origin: center -20px;
    width:50%;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    border-radius: 93% 7% 91% 9% / 7% 95% 5% 93% ;
}
.swing img {
    border: 5px solid #f8f8f8;
    display: block;
}
.swing:after{
    content: '';
    position: absolute;  
    width: 20px; height: 20px;  
    border: 1px solid #999;
    top: -10px; left: 50%;
    z-index: 0;
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
}
/* nail */
.swing:before{
    content: '';
    position: absolute;
    width: 5px; height: 5px;
    top: -14px;left: 54%;
    z-index: 5;
    border-radius: 50% 50%;
    background: #000;
}
.title {
  font-size: 16px;
  font-weight: bold;
}
.figure-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes swing {
    0% { transform: rotate(3deg); }
    100% { transform: rotate(-3deg); }
}

@media (min-width: 100px) and (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
