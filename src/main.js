import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

import JuegoContainer from './components/JuegoContainer.vue'

import AboutUs from './components/AboutUs.vue'
import MapaBasura from './components/MapaBasura.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    { path: '/', component: MapaBasura},
    { path: '/juego', component: JuegoContainer},
    { path: '/about', component: AboutUs}
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
