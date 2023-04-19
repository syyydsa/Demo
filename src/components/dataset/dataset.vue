<template>
  <div>
    <hr>
    <h1>测试自定义属性</h1>
    <input :data-btn="btn" @input="show($event)">
  </div>
</template>

<script>
export default {
    data() {
        return {
            btn:33,
        }
    },
    methods:{
        show(e) {
            console.log(e);
            console.log(e.data);
            console.log(e.target.dataset);
            console.log(e.target.dataset.btn);
        }
    }
}
</script>

<style scoped lang="less">
</style>
