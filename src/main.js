import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuelidate from 'vuelidate'
import InputMask from 'vue-input-mask';
 
Vue.use(Vuelidate)

Vue.component('input-mask', InputMask)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
