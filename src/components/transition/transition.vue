<template>
  <div>
    <transition name="box">
      <div class="box">
        我是会动的盒子
        <span class="child" v-if="show">我是会动的文字</span>
      </div>
    </transition>
    <button @click="show = !show">点我开启动画</button>
  </div>
</template>

<script>
export default {
    methods:{
    }
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid;
  position: relative;
}
.child {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: red;
}
</style>
