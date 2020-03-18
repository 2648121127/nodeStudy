<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 jc-around">
      <div class="iconfont icon-Back">&lt;</div>
      <div class="flex-1 px-2 text-ellipsis">{{model.title}}</div>
      <div class="text-grey fs-xs">2020-03-17</div>
    </div>
    <div :html="model.body"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: { rquired: true }
  },
  data() {
    return {
      model: null
    };
  },
  created() {
      this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    }
  }
};
</script>