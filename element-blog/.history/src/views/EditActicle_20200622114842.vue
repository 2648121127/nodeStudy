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
    created(){
      this.getDetail();
    },
    methods: {
      getDetail(){
        // console.log(this.$route)
        this.$http.get(`acticle/${this.$route.params.id}`).then(res=>{
          // console.log(res.data)
          this.acticle = res.data;
        })
      },
      saveActicle() {
          this.$http.put(`acticle/${this.$route.params.id}`,this.acticle).then(res=>{
            console.log(res)
            this.$message({
                message: '文章更新成功！',
                type: 'success'
            });
          })
          this.$router.push('/acticle/index')
        //   this.$router.push({path: 'device_goods', query: {id: row.id}})
      }
    }
  }
</script>