<template>
  <div>
    <el-form @submit.native.prevent="saveActicle" ref="form" :model="acticle" label-width="120px">
      <el-form-item label="标题">
        <el-input v-model="acticle.title"></el-input>
      </el-form-item>
    </el-form>
    <mavon-editor
      style="min-height: 300px , ming-width: 300px"
      v-model="markdown"
      @change="getMarkdown"
    />
    <div>
      <el-button type="primary" native-type="submit">保存</el-button>
      <!-- <button type="promise" @click="commitMarkdown">提交</button> -->
    </div>
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
    submit() {
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