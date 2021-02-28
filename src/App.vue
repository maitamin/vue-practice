<template>
  <div>
    <like-header></like-header>
    <h2>{{ number }}</h2>
    <likeNumber :totalNumber="number" @my-click="incrementNumber"></likeNumber>
    <like-number :total-number="number"></like-number>
    <like-number></like-number>
    <!-- これが一番の推奨系ぽい（要素はキャメル、属性はケバブ、イベントはケバブ） -->
    <likeNumber :total-number="number" @my-click="incrementNumber"></likeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader';

export default {
  data() {
    return {
      number: 14,
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(value) {
      return this.number = value;
    }
  }
}
</script>


<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
