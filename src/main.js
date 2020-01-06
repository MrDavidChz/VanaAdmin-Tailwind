import Vue from 'vue'
import layout from './views/layouts/Layout.vue'
import router from './router'
import store from './store'
import '@/assets/scss/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(layout)
}).$mount('#app')
