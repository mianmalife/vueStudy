import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import create from './create'
// import createNew from './createNew'
Vue.config.productionTip = false
// Vue.prototype.$create = create
// Vue.prototype.$createNew = createNew
Vue.use(create)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
