<template>
    <el-form @submit.native.prevent = "saveActicle" ref="form" :model="acticle" label-width="120px">
  <el-form-item label="文章标题">
    <el-input v-model="acticle.name"></el-input>
  </el-form-item>
  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="acticle.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        acticle: {
          name: '',
          region: '',
          desc: ''
        }
      }
    },
    methods: {
      saveActicle() {
        console.log('submit!');
      }
    }
  }
</script>