<template>
<div>
    <h3>分类列表</h3>
    <el-table :data="items">
        <el-table-column prop="_id" lable="ID" width="240"></el-table-column>
        <el-table-column prop="name" lable="分类名称"></el-table-column>
        <el-table-column prop="name" lable="分类名称">
            <template slot-scope="scope">
                <el-button type="text" @click="Edit(scope.row._id)">编辑</el-button>
                <el-button type="text" @click="remove(scope.row)">删除</el-button>
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
        },
        Edit(id){
            this.$router.push(`/categories/edit/${id}`);
            console.log(id)
        },
        remove(row){
            this.$confirm(`是否确定要删除分类"${row.name}"?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async() => {
                const res = await this.$http.delete(`/categories/${row._id}`)
                console.log(res)
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            })
        }
    }
}
</script>