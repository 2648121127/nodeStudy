<template>
  <div>
    <m-card :icon="icon" :title="title">
      <div class="nav jc-between">
        <div class="nav-item" :class="{active:active}" v-for="(category,i) in categories" :key="i">
          <div class="nav-link">{{category.name}}</div>
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
    </m-card>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    categories: { type: Array, required: true },
    image: { type: String }
  },
  data(){
    return{
      active: 0
    }
  }
};
</script>