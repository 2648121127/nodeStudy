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
        <el-button @click="cansole">取消</el-button>
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
    this.getDetail();
  },
  methods: {
    getMarkdown(){
      console.log(this.markdown)
    },
    getDetail() {
      // console.log(this.$route)
      this.$http.get(`markdown/${this.$route.params.id}`).then(res => {
        console.log(res.data);
        this.markdown = res.data;
      });
    },
    commitMarkdown() {
      this.$http.put(`markdown/${this.$route.params.id}`, this.markdown).then(res => {
          console.log(res);
          this.$message({
            message: "markdown更新成功！",
            type: "success"
          });
          this.$router.push("/markdown/list");
          //this.$router.push({path: 'device_goods', query: {id: row.id}})
        });
    },
    cansole() {
      this.$router.push("/markdown/list");
    }
  }
};
</script>