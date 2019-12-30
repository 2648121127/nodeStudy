<template>
    <div style="width:100%;">
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
  creates(){
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