import Vue from 'vue';
import Router from  'vue-router';
import HomeComponent from '@/components/pages/Home'
import GamesComponent from '@/components/pages/Games'
Vue.use(Router);

export default new Router({
    routes: [
        { path: "/", component: HomeComponent},
        { path: "/games/:gameId", component: GamesComponent }
    ]
})