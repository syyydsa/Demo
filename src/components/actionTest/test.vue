<template>
  <div>
    <button @click="show">show</button>
    <button @click="showVC">showVC</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            num:33,
        }
    },
    methods: {
      show() {
        this.$store.dispatch('showNum', this.num);
      },
      showVC() {
        console.log(this);
      }
    },
}
</script>

<style scoped lang="less">
</style>
