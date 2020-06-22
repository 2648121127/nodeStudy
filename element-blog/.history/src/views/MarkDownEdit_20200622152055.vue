<template>
  <div>
    <el-form
      @submit.native.prevent="commitMarkdown"
      ref="form"
      :model="markdown"
      label-width="120px"
    >
      <el-form-item label="标题">
        <el-input v-model="markdown.title"></el-input>
      </el-form-item>
      <el-form-item>
        <mavon-editor
          style="min-height: 300px , ming-width: 300px"
          v-model="markdown.body"
          @change="getMarkdown"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markdown:{
        title:'',
        body:''
      }
    };
  },
  created() {
    this.getMarkdown();
  },
  methods: {
    getDetail() {
      // console.log(this.$route)
      this.$http.get(`acticle/${this.$route.params.id}`).then(res => {
        console.log(res.data);
        this.acticle = res.data;
      });
    },
    saveActicle() {
      this.$http.put(`acticle/${this.$route.params.id}`, this.acticle).then(res => {
          console.log(res);
          this.$message({
            message: "文章更新成功！",
            type: "success"
          });
          this.$router.push("/acticle/index");
          //this.$router.push({path: 'device_goods', query: {id: row.id}})
        });
    },
    cansole() {
      this.$router.push("/acticle/index");
    }
  }
};
</script>