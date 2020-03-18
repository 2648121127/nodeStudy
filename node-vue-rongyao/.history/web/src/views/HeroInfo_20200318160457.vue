<template>
  <div class="hero-info">
    <div class="topbar bg-black py-2 px-3 text-white d-flex">
      <img src="../assets/logo.png" height="30" />
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link tag="div" to="/" class="btn bg-primary">立即下载</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { rquired: true }
  }
};
</script>