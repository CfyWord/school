import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ApiPath from './ApiPath/index.js';
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload);

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(ViewUI)
Vue.prototype.ApiPath = ApiPath;

import axios from 'axios'
import VueAxios from 'vue-axios'

require('./mock/index.js');

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    next();
});

router.afterEach((/*route*/) => {
    ViewUI.LoadingBar.finish();
});


//定义一个请求拦截器
axios.interceptors.request.use(function(config){
  return config
});
//定义一个响应拦截器
axios.interceptors.response.use(function(response){
  if (response.data.authCode==='403'){
      router.push({
        path:'/',
        from:router.history.current.fullPath,
      })
  }
  return response.data;
});


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
