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
            this.id && this.fetch();
        },
        methods:{
            //图片上传
            afterUpload(res){
                this.$set(this.model,'image',res.url)
            },
            save(){
                if(this.id){//修改
                    this.$http.put(`rest/ad/${this.id}`,this.model).then(res=>{
                        // console.log(res)
                        if(res.status == 200){
                            this.$router.push('/ad/list');
                            this.$message({
                                type:'success',
                                message:'修改成功'
                            })
                        }
                        
                    });
                }else{//新增
                    this.$http.post('rest/ad',this.model).then(res=>{
                        if(res.status == 200){
                            this.$router.push('/ad/list');
                            this.$message({
                                type:'success',
                                message:'保存成功'
                            })
                        }
                        
                    });
                }
            },
            fetch(){//获取详情
                this.$http.get(`rest/ad/${this.id}`).then(res=>{
                    if(res.status == 200){
                        this.model = res.data;
                    }
                    
                });
            },
        
        }
    }
</script>
