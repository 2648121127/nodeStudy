<template>
    <div style="width:100%;">
        <el-table :data="acticleData">
            <el-table-column prop="title" label="文章标题" >
            </el-table-column>
            <!-- <el-table-column prop="body" label="文章内容">
            </el-table-column> -->
            <el-table-column
              label="操作"
              width="200">
            <template slot-scope="scope">
              <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
              <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
            </template>
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
    this.getMarkdown();
  },
  methods: {
    getMarkdown(){
      this.$http.get('/markdown').then(res=>{
        // console.log(res)
        this.acticleData = res.data;
      })
    },
    edit(id){
      this.$router.push(`/markdown/${id}/edit`).then(res=>{
        // console.log(res)
      })
    },
    remove(id){
      // 因为后端用的是delete，所以这里也要一样
      this.$http.delete(`/markdown/${id}`).then(res=>{
        // console.log(res);
        this.$message({
              message: '删除成功！',
              type: 'success'
          });
        this.getMarkdown();
      })
    },
    
  }
}
</script>