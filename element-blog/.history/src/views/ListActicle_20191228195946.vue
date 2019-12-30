<template>
    <div style="width:100%;">
        <el-table :data="acticleData">
            <el-table-column prop="title" label="文章标题" width="200">
            </el-table-column>
            <el-table-column prop="body" label="文章内容">
            </el-table-column>
            <el-table-column
              label="操作"
              width="200">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
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