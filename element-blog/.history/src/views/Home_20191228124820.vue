<template>
  <div class="sidebar" :style="{'background-color':bgColor}">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>

  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'home',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .sidebar {
    height: 100rem;
    width: 11.9375rem;
    display: block;
    position: absolute;
    left: 0;
    top: 3.75rem;
    bottom:0;
  }
</style>
