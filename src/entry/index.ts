import Vue from 'vue';
import router from '../router';
import store from '../store';
import Index from '@/components/views/index/index.vue';
const app = new Vue({
  render: h => h(Index),
  router,
  store
});
app.$mount('#app');
