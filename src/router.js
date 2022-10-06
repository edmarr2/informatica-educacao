import Vue from 'vue';
import Router from  'vue-router';
import HomeComponent from '@/components/pages/Home'
import GamesComponent from '@/components/pages/Games'
import AboutComponent from '@/components/pages/AboutComponent'

Vue.use(Router);

export default new Router({
    routes: [
        { path: "/", component: HomeComponent, name: 'Informática na Educação - Início'},
        { path: "/games/:gameId", component: GamesComponent, name: 'Informática na Educação - Games'},
        { path: "/sobre", component: AboutComponent, name: 'Informática na Educação - Sobre' },
    ],
    mode: 'history'
})
