<template>
  <div class="page-article">
      <div class="d-flex">
          <div class="iconfont icon-Back">&lt;</div>
          <div class="flex-1">
              {{id}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        id:{rquired:true}
    }
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>