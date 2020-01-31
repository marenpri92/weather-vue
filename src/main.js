import Vue from 'vue';
import App from './modules/app/App';
import router from './core/router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
