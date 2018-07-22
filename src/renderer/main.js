import Vue from 'vue';
import axios from 'axios';
import Buefy from 'buefy';

import App from './App';
import router from './router';
import store from './store';

Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

const config = {
  apiKey: 'AIzaSyDbSEGvtJAbyWK68dCSiQeKg5taD-HY0Co',
  databaseURL: 'https://gravium-miner.firebaseio.com',
  projectId: 'gravium-miner',
};

window.firebase.initializeApp(config);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: {
    App,
  },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
