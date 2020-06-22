<template>
    <div>
        <mavon-editor style="min-height: 300px , ming-width: 300px" v-model="markdown" @change="getMarkdown"/>
        <div>
          <button type="promise" @click="commit"></button>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        markdown: ''
      }
    },
    created(){
     this.getMarkdown(); 
    },
    methods: {
        getMarkdown(){
            console.log(this.markdown)
        },
        commitMarkdown() {
          this.$http.post('markdown',this.acticle).then(res=>{
            console.log(res)
            this.$message({
                message: 'markdown提交成功！',
                type: 'success'
            });
          })
          this.$router.push('/acticle/index')
      }
    }
  }
</script>