import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import VueParticles from 'vue-particles'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuetify, {
 iconfont: 'fa'
})
Vue.use(VueParticles)

new Vue({
  router,
  render:h => h(App)
}).$mount('#app');
