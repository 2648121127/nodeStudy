<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom jc-around">
      <div class="iconfont icon-Back">&lt;</div>
      <div class="flex-1 pl-2 text-ellipsis text-blue">{{model.title}}</div>
      <div class="text-grey fs-xs">2020-03-17</div>
    </div>
    <div class="px-3 fs-lg body" v-html="model.body"></div>
    <div class="px-3">
        <div>
            <i class="iconfont icon-Menu"></i>
        </div>
    </div>
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

<style lang="scss">
.page-article{
    .icon-Back{
        font-size:1.6923rem;
    }
    .body{
        img{
            max-width:100%;
            height:auto;
        }
        iframe{ //  视频
            max-width:100%;
            height:auto;
        }
    }
}
</style>