import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// FormWizard
import VueFormWizard from 'vue-form-wizard'
import VueSparkles from  'vue-sparkles';
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

Vue.use(VueFormWizard)
Vue.use(VueSparkles);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
