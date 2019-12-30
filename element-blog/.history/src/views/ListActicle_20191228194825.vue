<template>
    <div style="width:80%;">
        <el-table :data="acticleData">
            <el-table-column prop="title" label="文章标题">
            </el-table-column>
            <el-table-column prop="body" label="文章内容">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      acticleData:[]
    }
  },
  created(){
    this.getActicle();
  },
  methods: {
    getActicle(){
      this.$http.get('acticle').then(res=>{
        console.log(res)
        this.acticleData = res.data;
      })
    }
  }
}
</script>