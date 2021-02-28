<template>
  <div>
    <like-header>
      <h2>みなさん</h2>
      <template #[title]="slotProps">
        <h2>こんにちわ</h2>
        <h2>{{ slotProps.user.firstName }}</h2>
      </template>
      <h3>はじめまして</h3>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
    </like-header>
    <!-- <like-header header-text="hello">
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
    </like-header> -->
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
      title: "title",
    };
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
  /* h1 {
    color: red;
  } */
  div {
    border: 1px solid blue;
  }
</style>
