import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

Vue.config.productionTip = true
Vue.component('LikeNumber', LikeNumber);
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});
// ディレクティブのグローバル登録
// Vue.directive("border", function(el, binding) {
//   // bindとupdateに定義したのと同等になる。
//   el.style.borderWidth = binding.value.width;
//   el.style.borderColor = binding.value.color;
//   el.style.borderStyle = binding.arg;
//   if (binding.modifiers.round) {
//     el.style.borderRadius = "0.5rem";
//   }
//   if (binding.modifiers.shadow) {
//     el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
//   }
// });
// Vue.directive("border", {
//   bind(el, binding, vnode) {
//     // ディレクティブが初めて対象の要素に紐づいた時
//   },
//   inserted(el, binding, vnode) {
//     // 親Nodeに挿入されたと時
//   },
//   update(el, binding, vnode, oldVnode) {
//     // コンポーネントが更新される度。子コンポーネントが更新される前
//   },
//   componentUpdated(el, binding, vnode, oldVnode) {
//     // コンポーネントが更新される度。子コンポーネントが更新された後
//   },
//   unbind(el, binding, vnode) {
//     // ディレクティブが紐づいている要素から取り除かれた時
//   },
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
