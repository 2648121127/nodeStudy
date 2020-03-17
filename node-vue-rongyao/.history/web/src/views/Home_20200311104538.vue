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
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        }
      }
    };
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
  }
};
</script>
