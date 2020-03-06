<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/" style="margin-bottom:20px;">
                <el-breadcrumb-item><i class="el-icon-pie-chart"></i>{{id?"编辑":"新建"}}广告位</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form label-width="120px" @submit.native.prevent="save">
                
                <el-form-item label="名称">
                    <el-input v-model="model.name"></el-input>
                </el-form-item>
                <el-form-item label="广告">
                    <el-button size="small" @click="model.skills.push({})">
                        <i class="el-icon-plus"></i>添加广告
                    </el-button>
                    <el-row type="flex" style="flex-wrap: wrap;margin-top:15px;">
                        <el-col :md="24" v-for="(item,index) of model.skills" :key="index">
                            <el-form-item label="链接地址（url）">
                                <el-input v-model="item.url"></el-input>
                            </el-form-item>
                            <el-form-item label="图片" style="margin-top:10px;">
                                <el-upload
                                    class="avatar-uploader"
                                    :action="$http.defaults.baseURL+'/upload'"
                                    :on-success="res=>$set(item,'image',res.url)"
                                    >
                                    <img v-if="item.image" :src="item.image" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label=" ">
                                <el-button size="small" type="danger" @click="model.skills.splice(index,1)">删除</el-button>
                            </el-form-item>
                            </el-col>
                    </el-row>
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
                model:{
                    name:'',
                    skills:[],
                },
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
