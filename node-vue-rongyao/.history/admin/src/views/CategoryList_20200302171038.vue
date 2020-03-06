<template>
<div>
    <h3>分类列表</h3>
    <el-table :data="items">
        <el-table-column prop="_id" lable="ID" width="240"></el-table-column>
        <el-table-column prop="name" lable="分类名称"></el-table-column>
        <el-table-column prop="name" lable="分类名称">
            <template slot-scope="scope">
                <el-button type="text" @click="Edit(scope._id)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
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
            console.log(this.items)
        }
    }
}
</script>