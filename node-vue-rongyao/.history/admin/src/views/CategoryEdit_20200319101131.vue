<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/" style="margin-bottom:20px;">
                <el-breadcrumb-item><i class="el-icon-pie-chart"></i>{{id?"编辑":"新建"}}分类</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form label-width="120px" @submit.native.prevent="save">
                <el-form-item filterable label="上级分类">
                    <el-select v-model="formData.parent">
                        <el-option v-for="item in parents"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            id:{}
        },
        data(){
            return{
                formData:{
                    name:''
                },
                parents:[],
            }
        },
        created(){
            this.fetchparent();
            this.id && this.fetch();

        },
        methods:{
            save(){
                if(this.id){
                    this.$http.put(`rest/categories/${this.id}`,this.formData).then(res=>{
                        // console.log(res)
                        if(res.status == 200){
                            this.$router.push('/categories/list');
                            this.$message({
                                type:'success',
                                message:'修改成功'
                            })
                        }
                        
                    });
                }else{
                    this.$http.post('rest/categories',this.formData).then(res=>{
                        if(res.status == 200){
                            this.$router.push('/categories/list');
                            this.$message({
                                type:'success',
                                message:'保存成功'
                            })
                        }
                        
                    });
                }
            },
            fetch(){
                this.$http.get(`rest/categories/${this.id}`).then(res=>{
                    if(res.status == 200){
                        // console.log(res.data)
                        this.formData = res.data;
                    }
                    
                });
            },
            async fetchparent(){
                const res = await this.$http.get(`rest/categories`);
                this.parents = res.data;
                // console.log(res.data)
            }
        }
    }
</script>