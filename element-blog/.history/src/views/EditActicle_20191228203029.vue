<template>
    <el-form @submit.native.prevent = "saveActicle" ref="form" :model="acticle" label-width="120px">
  <el-form-item label="文章标题">
    <el-input v-model="acticle.title"></el-input>
  </el-form-item>
  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="acticle.body"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">保存</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        acticle: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      saveActicle() {
          this.$http.post('acticle',this.acticle).then(res=>{
            console.log(res)
            this.$message({
                message: '文章创建成功！',
                type: 'success'
            });
          })
          this.$router.push('/acticle/index')
        //   this.$router.push({path: 'device_goods', query: {id: row.id}})
        console.log(this.acticle);
      }
    }
  }
</script>