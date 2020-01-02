<template>
    <FormItem label="公告内容" prop="content">
        <mavon-editor style="min-height: 300px , ming-width: 300px" v-model="markdown" @change="getMarkdown"/>
    </FormItem>
    <!-- <div>
        <mavon-editor style="min-height: 300px , ming-width: 300px" v-model="markdown" @change="getMarkdown"/>
    </div> -->
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
        }
    }
  }
</script>