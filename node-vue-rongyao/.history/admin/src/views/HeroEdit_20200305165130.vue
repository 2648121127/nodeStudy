<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/" style="margin-bottom:20px;">
                <el-breadcrumb-item><i class="el-icon-pie-chart"></i>{{id?"编辑":"新建"}}英雄</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form label-width="120px" @submit.native.prevent="save">
                <el-tabs type="border-card" value="skills">
                    <el-tab-pane label="基础信息"> 
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
                        <el-form-item label="难度">
                            <el-rate style="margin-top:0.7rem;" :max="9" show-score v-model="formData.scores.difficult"></el-rate>
                        </el-form-item>
                        <el-form-item label="技能">
                            <el-rate style="margin-top:0.7rem;" :max="9" show-score v-model="formData.scores.skills"></el-rate>
                        </el-form-item>
                        <el-form-item label="攻击">
                            <el-rate style="margin-top:0.7rem;" :max="9" show-score v-model="formData.scores.attack"></el-rate>
                        </el-form-item>
                        <el-form-item label="生存">
                            <el-rate style="margin-top:0.7rem;" :max="9" show-score v-model="formData.scores.survive"></el-rate>
                        </el-form-item>
                        <el-form-item label="顺风出装">
                            <el-select v-model="formData.items1" multiple>
                                <el-option v-for="item of items"
                                :key="item._id"
                                :label="item.name"
                                :value="item._id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="逆风出装">
                            <el-select v-model="formData.items2" multiple>
                                <el-option v-for="item of items"
                                :key="item._id"
                                :label="item.name"
                                :value="item._id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="使用技巧">
                            <el-input type="textarea" v-model="formData.usageTips"></el-input>
                        </el-form-item>
                        <el-form-item label="对抗技巧">
                            <el-input type="textarea" v-model="formData.battleTips"></el-input>
                        </el-form-item>
                        <el-form-item label="团战思路">
                            <el-input type="textarea" v-model="formData.teamTips"></el-input>
                        </el-form-item>
                    </el-tab-pane>

                    <!-- 技能 -->
                    <el-tab-pane label="技能" name="skills">
                        <el-button size="small" @click="formData.skills.push({})">
                            <i class="el-icon-plus"></i>添加技能
                        </el-button>
                        <el-row type="flex" style="flex-wrap: wrap;">
                            <el-col :md="12" v-for="(item,index) of formData.skills" :key="index">
                                <el-form-item label="名称">
                                    <el-input v-model="item.name"></el-input>
                                </el-form-item>
                                <el-form-item label="冷却值">
                                    <el-input v-model="item.cooling"></el-input>
                                </el-form-item>
                                <el-form-item label="消耗">
                                    <el-input v-model="item.consume"></el-input>
                                </el-form-item>
                                <el-form-item label="技能图标">
                                    <el-upload
                                        class="avatar-uploader"
                                        :action="$http.defaults.baseURL+'/upload'"
                                        :on-success="res=>$set(item,'icon',res.url)"
                                        >
                                        <img v-if="item.icon" :src="item.icon" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </el-form-item>
                                <el-form-item label="描述">
                                    <el-input type="textarea" v-model="item.description"></el-input>
                                </el-form-item>
                                <el-form-item label="提示">
                                    <el-input type="textarea" v-model="item.tips"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button size="small" type="danger" @click="formData.skills.splice(index,1)">删除</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
                <el-form-item style="margin-top:2rem;">
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
                    scores:{
                        difficult:0,
                        skills:0,
                        attack:0,
                        survive:0,
                    },
                    usageTips:'',
                    battleTips:'',
                    teamTips:'',
                    skills:{}

                },
                categories:[],
                items:[],
            }
        },
        created(){
            this.fetchCategories();
            this.fetchItems();
            this.id && this.fetch();
        },
        methods:{
            //图片上传
            afterUpload(res){
                // this.$set(this.formData,'avatar',res.url)
                this.formData.avatar = res.url;
            },
            fetch(){//获取详情
                this.$http.get(`rest/hero/${this.id}`).then(res=>{
                    if(res.status == 200){
                        // this.formData = res.data;//这种形式formData的参数容易覆被盖空，例如：如果直接这样赋值，scores的默认数据将会被后台返回的数据覆盖(此时后台没有这个字段返回)
                        this.formData = Object.assign({},this.formData,res.data);
                    }
                    
                });
            },
            fetchCategories(){//获取分类
                this.$http.get(`rest/categories`).then(res=>{
                    if(res.status == 200){
                        this.categories = res.data;
                    }
                    
                });
            },
            fetchItems(){//获取物品装备
                this.$http.get(`rest/item`).then(res=>{
                    if(res.status == 200){
                        this.items = res.data;
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
    width: 6rem;
    height: 6rem;
    line-height: 6rem;
    text-align: center;
  }
  .avatar {
    width: 6rem;
    height: 6rem;
    display: block;
  }
</style>