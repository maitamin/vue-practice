<template>
  <div>
    <like-header>
      <h3>はじめまして</h3>
    </like-header>
    <!-- これが一番の推奨系ぽい（要素はキャメル、属性はケバブ、イベントはケバブ） -->
    <likeNumber :total-number="number" @my-click="incrementNumber"></likeNumber>

    <button @click="currentComponent='Home'">Home</button>
    <button @click="currentComponent='About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader';
import About from './components/About';
import Home from './components/Home';

export default {
  data() {
    return {
      number: 14,
      currentComponent: "Home"
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
  },
  methods: {
    incrementNumber(value) {
      return this.number = value;
    }
  }
}
</script>


<style scoped>
  /* h1 {
    color: red;
  } */
  div {
    border: 1px solid blue;
  }
</style>
