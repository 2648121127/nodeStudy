<template>
  <div>
    <div class="topbar bg-black py-2 px-3 text-white d-flex">
      <img src="../assets/logo.png" height="30" />
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button typy="button" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary py-2">
      <div class="nav d-flex text-white">
        <div class="nav-item">
          <router-view>首页</router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>