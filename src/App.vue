<template>
  <div>
    <test/>
    <dataset/>
    <transition/>
  </div>
</template>

<script>
import Test from './components/actionTest/test.vue';
import Dataset from './components/dataset/dataset.vue';
import transition from './components/transition/transition.vue';

export default {
  components: { Test, Dataset, transition },
  methods:{
    add() {
      this.$store.commit('add',10);
    },
    reduce() {
      this.$store.commit('reduce');
    },
    show() {
      console.log(this);
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
