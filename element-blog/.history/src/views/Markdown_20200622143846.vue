<template>
    <div>
        <mavon-editor style="min-height: 300px , ming-width: 300px" v-model="body.markdown" @change="getMarkdown"/>
        <div>
          <button type="promise" @click="commitMarkdown">提交</button>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        body:{
          markdown: ''
        }
        
      }
    },
    created(){
     this.getMarkdown(); 
    },
    methods: {
      getMarkdown(){
          console.log(this.body.markdown)
      },
      commitMarkdown() {
        console.log(this.markdown)
        this.$http.post('markdown',this.body.markdown).then(res=>{
          console.log(res)
          this.$message({
              message: 'markdown提交成功！',
              type: 'success'
          });
        })
        this.$router.push('/acticle/index');
      }
    }
  }
</script>