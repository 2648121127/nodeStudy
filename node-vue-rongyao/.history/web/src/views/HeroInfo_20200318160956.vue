<template>
  <div class="hero-info">
    <div class="topbar bg-black py-2 px-3 text-white d-flex ai-center">
      <img src="../assets/logo.png" height="30" />
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link tag="div" to="/">立即下载 &gt;</router-link>
    </div>
    <div>
        {{id}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { rquired: true }
  },
  data(){
      return{
          model:null,
      }
  },
  methods:{
      async fetch(){
          const res = await this.$http.get(`heroInfo/${this.id}`)
        this.model = res.data;
      }
  },
  created(){
      this.fetch();
  }
};
</script>