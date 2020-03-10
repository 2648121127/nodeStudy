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
  computed:{ //给router-view加个唯一的key，来保证路由切换时都会重新渲染触发钩子了  
    key(){
      console.log(this.$route);
      console.log(this.route);
      return this.$route.name?this.$route.name+new Date():this.$route+new Date();
    }
  }
}
</script>
<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
} */

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
