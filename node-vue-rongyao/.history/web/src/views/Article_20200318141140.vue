<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom ai-center">
      <div class="iconfont icon-Back">&lt;</div>
      <div class="flex-1 pl-2 text-ellipsis text-blue">{{model.title}}</div>
      <div class="text-grey fs-xs">2020-03-17</div>
    </div>
    <div class="px-3 fs-lg body" v-html="model.body"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-cneter">
        <i class="iconfont icon-Menu"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link
          class="py-1 text-ellipsis"
          tag="div"
          :to="`/article/${item._id}`"
          v-for="item in model.related"
          :key="item._id"
        >{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { rquired: true }
  },
  watch: { //点击相关资讯，因为用的是统一个组件，所以监听路由的id，当id变化后，执行fetch方法
    id: "fetch",  //简写，以下是全写
    // id(){ 
    //     this.fetch()
    // }
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
.page-article {
  .icon-Back {
    font-size: 1.6923rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      //  视频
      max-width: 100%;
      height: auto;
    }
  }
}
</style>