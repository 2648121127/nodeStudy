<template>
    <div class="card bg-white p-3 mt-3">
      <div class="card-header d-flex py-1 ai-center">
        <i class="iconfont fs-lg" :class="`icon-${icon}`"></i>
        <div class="flex-1 ml-2 fs-xl">{{title}}</div>
        <i class="iconfont icon-more"></i>
      </div>
       <div class="card-body pt-2">
           <slot></slot>
       </div>
    </div>
</template>

<script>
export default{
    props:{
        title:{type:String,required:true},
        icon:{type:String,required:true},
    }
}
</script>
<style lang="scss">

</style>