import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'; // Import the router
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
