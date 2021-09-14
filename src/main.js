import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//!引入element插件
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi,{size:"small",zIndex:3000})

//!引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css';
Vue.use(iView);

Vue.config.productionTip = false

//!mock注册
import './mock/index'

//!iconfont注册
import './assets/iconfont/iconfont.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
