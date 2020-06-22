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
      markdown: ""
    };
  },
  created() {
    this.getMarkdown();
  },
  methods: {
    getMarkdown() {
      console.log(this.markdown);
    },
    commitMarkdown() {
      console.log(this.markdown);
      let params = {
        markdown: this.markdown
      };
      this.$http.post("markdown", params).then(res => {
        console.log(res);
        this.$message({
          message: "markdown提交成功！",
          type: "success"
        });
      });
      this.$router.push("/acticle/index");
    }
  }
};
</script>