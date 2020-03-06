<template>
<div>
    <h3>分类列表</h3>
    <el-tabel :data="items">
        <el-table-column prop="id" lable="ID"></el-table-column>
        <el-table-column prop="name" lable="分类名称"></el-table-column>
    </el-tabel>
</div>

</template>
<script>
export default{
    data(){
        return {
            items:[],
        }
    },
    created(){
        this.fetch();
    },
    methods:{
        async fetch(){
            const res = await this.$http.get('categories');
            this.items = res.data;
        }
    }
}
</script>