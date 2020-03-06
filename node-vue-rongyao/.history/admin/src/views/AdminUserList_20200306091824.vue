<template>
<div>
    <h3>管理员列表</h3>
    <el-table :data="items">
        <el-table-column prop="_id" label="ID" width="240"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <!-- <el-table-column prop="password" label="密码"></el-table-column> -->
        <el-table-column prop="name" label="操作">
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
            const res = await this.$http.get('rest/admin_user');
            this.items = res.data;
        },
        Edit(id){
            this.$router.push(`/admin_user/edit/${id}`);
            // console.log(id)
        },
        remove(row){
            this.$confirm(`是否确定要删除分类"${row.username}"?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async() => {
                const res = await this.$http.delete(`rest/admin_user/${row._id}`)
                res.data.success && this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                this.fetch();
            })
        }
    }
}
</script>