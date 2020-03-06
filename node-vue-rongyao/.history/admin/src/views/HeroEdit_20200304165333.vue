<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/" style="margin-bottom:20px;">
                <el-breadcrumb-item><i class="el-icon-pie-chart"></i>{{id?"编辑":"新建"}}物品</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form label-width="120px" @submit.native.prevent="save">
                <el-form-item label="英雄名称">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="头像">
                    <el-upload
                        class="avatar-uploader"
                        :action="$http.defaults.baseURL+'/upload'"
                        :on-success="afterUpload"
                        >
                        <img v-if="formData.avatar" :src="formData.avatar" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="称号">
                    <el-input v-model="formData.title"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-select v-model="formData.categories" multiple>
                        <el-option v-for="item of categories"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id">
                        </el-option>
                    </el-select>
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
                    name:'',
                    avatar:'',
                },
                categories:[],
            }
        },
        created(){
            this.fetchCategories();
            this.id && this.fetch();
        },
        methods:{
            //图片上传
            afterUpload(res){
                // this.$set(this.formData,'avatar',res.url)
                this.formData.avatar = res.url;
            },
            fetchCategories(){//获取分类
                this.$http.get(`rest/categories/${this.id}`).then(res=>{
                    if(res.status == 200){
                        console.log(res.data)
                        this.formData = res.data;
                    }
                    
                });
            },
            fetch(){//获取详情
                this.$http.get(`rest/hero/${this.id}`).then(res=>{
                    if(res.status == 200){
                        // console.log(res.data)
                        this.formData = res.data;
                    }
                    
                });
            },
            save(){
                if(this.id){//修改
                    this.$http.put(`rest/hero/${this.id}`,this.formData).then(res=>{
                        // console.log(res)
                        if(res.status == 200){
                            this.$router.push('/hero/list');
                            this.$message({
                                type:'success',
                                message:'修改成功'
                            })
                        }
                        
                    });
                }else{//新增
                    this.$http.post('rest/hero',this.formData).then(res=>{
                        if(res.status == 200){
                            this.$router.push('/hero/list');
                            this.$message({
                                type:'success',
                                message:'保存成功'
                            })
                        }
                        
                    });
                }
            },
        
        }
    }
</script>

<style>
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .el-icon-plus.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>