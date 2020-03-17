<template>
  <div>
    <m-card :icon="icon" :title="title">
      <div class="nav jc-between">
        <div class="nav-item active" :class="{active:false}">
          <div class="nav-link">热门</div>
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
    image: { type: String }
  }
};
</script>