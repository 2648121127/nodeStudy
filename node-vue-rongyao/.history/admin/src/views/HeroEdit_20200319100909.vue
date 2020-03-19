<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/" style="margin-bottom:20px;">
        <el-breadcrumb-item>
          <i class="el-icon-pie-chart"></i>
          {{id?"编辑":"新建"}}英雄
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-form label-width="120px" @submit.native.prevent="save">
        <el-tabs type="border-card" value="basic">
          <el-tab-pane label="基础信息" name="basic">
            <el-form-item label="英雄名称">
              <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="头像">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthHeaders()"
                :on-success="res=>$set(model,'avatar',res.url)"
              >
                <img v-if="model.avatar" :src="model.avatar" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="banner">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthHeaders()"
                :on-success="res=>$set(model,'banner',res.url)"
              >
                <img v-if="model.banner" :src="model.banner" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="称号">
              <el-input v-model="model.title"></el-input>
            </el-form-item>
            <el-form-item label="类型">
              <el-select v-model="model.categories" multiple>
                <el-option
                  v-for="item of categories"
                  :key="item._id"
                  :label="item.name"
                  :value="item._id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="难度">
              <el-rate
                style="margin-top:0.7rem;"
                :max="9"
                show-score
                v-model="model.scores.difficult"
              ></el-rate>
            </el-form-item>
            <el-form-item label="技能">
              <el-rate style="margin-top:0.7rem;" :max="9" show-score v-model="model.scores.skills"></el-rate>
            </el-form-item>
            <el-form-item label="攻击">
              <el-rate style="margin-top:0.7rem;" :max="9" show-score v-model="model.scores.attack"></el-rate>
            </el-form-item>
            <el-form-item label="生存">
              <el-rate
                style="margin-top:0.7rem;"
                :max="9"
                show-score
                v-model="model.scores.survive"
              ></el-rate>
            </el-form-item>
            <el-form-item label="顺风出装">
              <el-select v-model="model.items1" multiple>
                <el-option
                  v-for="item of items"
                  :key="item._id"
                  :label="item.name"
                  :value="item._id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="逆风出装">
              <el-select v-model="model.items2" multiple>
                <el-option
                  v-for="item of items"
                  :key="item._id"
                  :label="item.name"
                  :value="item._id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="使用技巧">
              <el-input type="textarea" v-model="model.usageTips"></el-input>
            </el-form-item>
            <el-form-item label="对抗技巧">
              <el-input type="textarea" v-model="model.battleTips"></el-input>
            </el-form-item>
            <el-form-item label="团战思路">
              <el-input type="textarea" v-model="model.teamTips"></el-input>
            </el-form-item>
          </el-tab-pane>

          <!-- 技能 start-->
          <el-tab-pane label="技能" name="skills">
            <el-button size="small" @click="model.skills.push({})">
              <i class="el-icon-plus"></i>添加技能
            </el-button>
            <el-row type="flex" style="flex-wrap: wrap;">
              <el-col :md="12" v-for="(item,index) of model.skills" :key="index">
                <el-form-item label="名称">
                  <el-input v-model="item.name"></el-input>
                </el-form-item>
                <el-form-item label="技能图标">
                  <el-upload
                    class="avatar-uploader"
                    :headers="getAuthHeaders()"
                    :action="uploadUrl"
                    :on-success="res=>$set(item,'icon',res.url)"
                  >
                    <img v-if="item.icon" :src="item.icon" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="冷却值">
                  <el-input v-model="item.delay"></el-input>
                </el-form-item>
                <el-form-item label="消耗">
                  <el-input v-model="item.cost"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input type="textarea" v-model="item.description"></el-input>
                </el-form-item>
                <el-form-item label="小提示">
                  <el-input type="textarea" v-model="item.tips"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button size="small" type="danger" @click="model.skills.splice(index,1)">删除</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <!-- 技能  end -->

          <!-- 最佳搭档 start-->
          <el-tab-pane label="最佳搭档" name="partners">
            <el-button size="small" @click="model.partners.push({})">
              <i class="el-icon-plus"></i>添加英雄
            </el-button>
            <el-row type="flex" style="flex-wrap: wrap;">
              <el-col :md="12" v-for="(item,index) of model.partners" :key="index">
                <el-form-item label="英雄">
                  <el-select v-model="item.hero">
                    <el-option
                      v-for="hero of heroes"
                      :key="hero._id"
                      :label="hero.name"
                      :value="hero._id"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input type="textarea" v-model="item.description"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button size="small" type="danger" @click="model.partners.splice(index,1)">删除</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <!-- 最佳搭档 end-->
        </el-tabs>
        <el-form-item style="margin-top:2rem;">
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        name: "",
        avatar: "",
        banner: "",
        scores: {
            difficult: 0,
            skills: 0,
            attack: 0,
            survive: 0
        },
        usageTips: "",
        battleTips: "",
        teamTips: "",
        skills: [],
        partners: []
      },
        categories: [],
        items: [],
        heroes: []
    };
  },
  created() {
    this.fetchCategories();
    this.fetchItems();
    this.fetHeroes();
    this.id && this.fetch();
  },
  methods: {
    //图片上传成功 on-success
    // afterUpload(res){
    //     // this.$set(this.model,'avatar',res.url)
    //     this.model.avatar = res.url;
    // },
    fetch() {
      //获取详情
      this.$http.get(`rest/hero/${this.id}`).then(res => {
        if (res.status == 200) {
          // this.model = res.data;//这种形式model的参数容易覆被盖空，例如：如果直接这样赋值，scores的默认数据将会被后台返回的数据覆盖(此时后台没有这个字段返回)
          this.model = Object.assign({}, this.model, res.data);
        }
      });
    },
    fetchCategories() {
      //获取分类
      this.$http.get(`rest/categories`).then(res => {
        if (res.status == 200) {
          this.categories = res.data;
        }
      });
    },
    fetchItems() {
      //获取物品装备
      this.$http.get(`rest/item`).then(res => {
        if (res.status == 200) {
          this.items = res.data;
        }
      });
    },
    async fetHeroes() {
        const res = await this.$http.get("rest/hero");
        this.heroes = res.data;
    },
    save() {
      if (this.id) {
        //修改
        this.$http.put(`rest/hero/${this.id}`, this.model).then(res => {
          // console.log(res)
          if (res.status == 200) {
            // this.$router.push('/hero/list');
            this.$message({
              type: "success",
              message: "修改成功"
            });
          }
        });
      } else {
        //新增
        this.$http.post("rest/hero", this.model).then(res => {
          if (res.status == 200) {
            // this.$router.push('/hero/list');
            this.$message({
              type: "success",
              message: "保存成功"
            });
          }
        });
      }
    }
  }
};
</script>
