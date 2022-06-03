import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTheMask from 'vue-the-mask'
import router from './routes/router'
import {store} from './store'
Vue.use(VueTheMask)

Vue.use(router)
Vue.use(store)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
