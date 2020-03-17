<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex py-1 ai-center pb-3">
      <i class="iconfont fs-lg" :class="`icon-${icon}`"></i>
      <div class="flex-1 ml-2 fs-xl">{{title}}</div>
      <i class="iconfont icon-more"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    image: {type: String, required: true}
  }
};
</script>
<style lang="scss">
@import '../assets/scss/_variables.scss';

.card{
    .card-header {
        border-bottom:1px solid $border-color;
    }
}
</style>