<template>
  <b-container>
      <b-row class="m-4">
        <h4 class="title">
          Sobre a Plataforma
        </h4>
        <b-col>
          Plataforma desenvolvida na disciplina de Informática na Educação, ela teve como propósito salientar e instigar
          as crianças e adolescentes a entenderem de forma dinâmica alguns princípios da rede como proteger seus dados contra malware, consumismo, informações pessoais e configurações de privacidade.
        </b-col>
      </b-row>
      <b-row>
        <b-col class="p-4">
          <b>Valguima Victoria Viana Aguiar Odakura</b>
          <br>
          Professora orientadora 
        </b-col>
        <h4 class="title">
          Alunos envolvidos
        </h4>
        <b-col cols="6" class="p-2" v-for="creator in creators" :key="creator.id">
          <b>{{creator.name}}</b>
          <br>
          {{creator.action}}
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <h5>Participação especial</h5>
          Sara Rayssa
          <br>
          Julyane Gomes Barros  
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <h4>Lincença</h4>
          O tipo de licença é gratuíta, qualquer pessoa que tiver interesse pode encontrar o código fonte nesse <a href="https://github.com/edmarr2/informatica-educacao" target="_blank">link</a> e adapta-los aos diferentes cenários.
        </b-col>
      </b-row>
  </b-container>
</template>

<script>
import Creators from '../../services/creators'
export default {
  name: "Home",
  data() {
    return {
      creators: Creators
    }
  }
};
</script>
<style>
.link-ufgd {
  text-decoration: none;
}
.names {
  text-align: end;

}
</style>