<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/67d519d72697d6f7c636349979eb05dc.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/67d519d72697d6f7c636349979eb05dc.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/67d519d72697d6f7c636349979eb05dc.jpeg" />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- swiper of end -->
    <div class="nav-icons bg-white text-center mt-3 text-grey pt-3">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span class="text-dark-1">收起</span>
      </div>
    </div>

    <!-- nav of icon end -->
    <!-- <m-card icon="Menu" title="新闻资讯" :categories="newsCats">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">公告</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">活动</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <div class="pt-2">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div class="py-2" v-for="n in 5" :key="n">
              <span>[新闻]</span>
              <span>|</span>
              <span>3月11日全服不停机更新公告</span>
              <span>03/11</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>-->
    <m-list-card icon="Menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <!--组件里的solt的name是items，所以这里的也是items -->
        <router-link tag="div" class="py-2 d-flex" v-for="(news,i) in category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-ellipsis text-dark-1 pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.data | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <!-- 英雄列表 -->
    <m-list-card icon="heroku" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <!--组件里的solt的name是items，所以这里的也是items -->
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem;">
          <div style="width:20%;" class="p-2 text-center" v-for="(hero,i) in category.heroList" :key="i">
            <img :src="hero.avatar" class="w-100" />
            <div>{{hero.name}}</div>
          </div>
        </div>
      </template>
    </m-list-card>

    <m-card
      icon="heroku"
      title="英雄列表"
      image="http://ossweb-img.qq.com/upload/webplat/info/yxzj/20200108/20796372351730.jpg"
    ></m-card>
    <!-- <m-card icon="heroku" title="英雄列表" :image="this.img"></m-card> -->
    <m-card icon="Menu" title="精彩视频"></m-card>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      //日期管道
      return dayjs(val).format("MM/DD");
    }
  },
  name: "home",
  data() {
    return {
      // img: require("../assets/images/20796372351730.jpg"),
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        },
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal"
      },
      newsCats: [],
      heroCats: []
      // newsCats: [  //造假数据
      //   {
      //     name: "热门",
      //     newsList: new Array(5).fill(1).map(v => ({
      //       categoryName: "热门",
      //       title: "3月11日全服不停机更新公告3月11日全服不停机更新公告",
      //       data: "11/03"
      //     }))
      //   },
      //   {
      //     name: "新闻",
      //     newsList: new Array(5).fill(1).map(v => ({
      //       categoryName: "新闻",
      //       title: "3月11日全服不停机更新公告",
      //       data: "11/03"
      //     }))
      //   },
      //   {
      //     name: "公告",
      //     newsList: new Array(5).fill(1).map(v => ({
      //       categoryName: "公告",
      //       title: "3月11日全服不停机更新公告",
      //       data: "11/03"
      //     }))
      //   },
      //   {
      //     name: "活动",
      //     newsList: new Array(5).fill(1).map(v => ({
      //       categoryName: "活动",
      //       title: "3月11日全服不停机更新公告",
      //       data: "11/03"
      //     }))
      //   },
      //   {
      //     name: "赛事",
      //     newsList: new Array(5).fill(1).map(v => ({
      //       categoryName: "赛事",
      //       title: "3月11日全服不停机更新公告",
      //       data: "11/03"
      //     }))
      //   }
      // ]
    };
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
  },
  created() {
    this.fetNewsCats();
    this.fetheroCats();
  },
  methods: {
    async fetNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetheroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    opacity: 1;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border-right: none;
    }
    // border-right: 1px solid $border-color;
    // &:nth-child(4n) {
    //   border-right:none;
    // }
  }
}
</style>
