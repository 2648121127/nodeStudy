<template>
  <div>
    <m-card icon="Menu" title="新闻资讯">
      <div class="nav jc-between">
        <div class="nav-item active" :class="{active:false}">
          <div class="nav-link">热门</div>
        </div>
        <!-- <div class="nav-item">
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
        </div> -->
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
export default {};
</script>