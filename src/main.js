import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import { router } from './routes/index.js'
=======
import './assets/css/style.css'
import { router } from './routes/index.js'
import { store } from './store/index.js'
>>>>>>> e28b04fc79db9670f0b0ad6afc2a68e1bc24d5f5

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
<<<<<<< HEAD
  router
=======
  router,
  store
>>>>>>> e28b04fc79db9670f0b0ad6afc2a68e1bc24d5f5
}).$mount('#app')
