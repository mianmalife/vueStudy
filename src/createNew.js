import Vue from 'vue'
// function createNew(Component, props) {
//   const Constor = Vue.extend(Component)
//   const cmp = new Constor({ propsData: props })
//   cmp.$mount()
//   document.body.appendChild(cmp.$el)
//   cmp.remove = function () {
//     document.body.removeChild(cmp.$el)
//     cmp.$destroy()
//   }
//   return cmp
// }

function createNew(Component, props) {
  const vm = new Vue({
    render: h => h(Component, {props})
  }).$mount()

  document.body.appendChild(vm.$el)

  const cmp = vm.$children[0]
  cmp.remove = function() {
    document.body.removeChild(cmp.$el)
    cmp.$destroy()
  }
  return cmp
}
export default createNew