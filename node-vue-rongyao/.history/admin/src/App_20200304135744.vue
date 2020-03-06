<template>
  <div id="app">
    <router-view :key="key"/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  computed:{
    key(){
      console.log(this.$route)
      return this.$route.name?this.route.name+new Date():this.route+new Date();
    }
  }
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
}
</style>
