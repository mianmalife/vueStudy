import Vue from 'vue'
import KDialog from './components/k-dialog.vue'
function create (Component, props) {
  const Cot = Vue.extend(Component)
  const cmp = new Cot({propsData: props})
  cmp.$mount()
  document.body.appendChild(cmp.$el)
  cmp.remove = function () {
    document.body.removeChild(cmp.$el)
    cmp.$destroy()
  }
  return cmp
  // const vm = new Vue({
  //   // h是createElement 返回vdom
  //   render: h => h(Component, { props })
  // }).$mount() // 不指定宿主元素，则只创建真实dom,但是不会追加操作
  // // vm.$el是真实dom
  // document.body.appendChild(vm.$el)
  // const cmp = vm.$children[0]
  // cmp.remove = function () {
  //   document.body.removeChild(vm.$el)
  //   vm.$destroy()
  // }
  // return cmp
}
export default {
  install(Vue) {
    Vue.prototype.$dialog = function(option) {
      return create(KDialog, option)
    }
  }
}
