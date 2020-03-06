<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/" style="margin-bottom:20px;">
                <el-breadcrumb-item><i class="el-icon-pie-chart"></i>{{id?"编辑":"新建"}}广告</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form label-width="120px" @submit.native.prevent="save">
                
                <el-form-item label="广告名称">
                    <el-input v-model="model.name"></el-input>
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
                model:{},
            }
        },
        created(){
            console.log(this.id)
            this.id && this.fetch();
        },
        methods:{
            //图片上传
            afterUpload(res){
                this.$set(this.model,'icon',res.url)
                // this.model.icon = res.url;
                console.log(res)
            },
            save(){
                if(this.id){//修改
                    this.$http.put(`rest/item/${this.id}`,this.model).then(res=>{
                        // console.log(res)
                        if(res.status == 200){
                            this.$router.push('/item/list');
                            this.$message({
                                type:'success',
                                message:'修改成功'
                            })
                        }
                        
                    });
                }else{//新增
                    this.$http.post('rest/item',this.model).then(res=>{
                        if(res.status == 200){
                            this.$router.push('/item/list');
                            this.$message({
                                type:'success',
                                message:'保存成功'
                            })
                        }
                        
                    });
                }
            },
            fetch(){//获取详情
                this.$http.get(`rest/item/${this.id}`).then(res=>{
                    if(res.status == 200){
                        // console.log(res.data)
                        this.model = res.data;
                    }
                    
                });
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