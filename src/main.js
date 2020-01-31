import Vue from 'vue';
import App from './modules/app/App';
import router from './core/router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
