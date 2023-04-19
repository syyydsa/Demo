<template>
  <div>
    <ul>
        <li v-for="(city, index) in city" :key="city.id">{{ index }} - {{ city.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      city: [
        {
          name: "shanghai",
          id:1,
        },
        {
          name: "chongqing",
          id:2,
        },
        {
          name: "chengdu",
          id:3,
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
</style>
