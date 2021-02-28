<template>
  <div>
    <p v-border:solid.round.shadow ="{width: '5px', color: 'brown'}">Home</p>
    <h2>{{ title | upperCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber";
import { tokyoNumber } from "@/tokyoNumber";  

export default {
  mixins: [tokyoNumber],
  data() {
    return {
      tmpData: "hello",
    };
  },
  components: {
    CountNumber,
  },
  directives: {
    border(el, binding/*, vnode, oldVnode*/) {
      // bindとupdateに定義したのと同等になる。
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
      }
    },
  },
}
</script>
