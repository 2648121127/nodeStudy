<template>
    <div>
        <mavon-editor style="width: 70%" v-model="markdown"/>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        // markdown: ''
      }
    },
    created(){
      this.getDetail();
    },
    methods: {
    
    }
  }
</script>