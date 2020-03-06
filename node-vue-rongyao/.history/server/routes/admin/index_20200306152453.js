/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:30:39 
 * @Last Modified by: author
 * @Last Modified time: 2020-03-06 15:24:53
 */
module.exports = app =>{
    const express = require('express');
    const router = express.Router({
      mergeParams:true,
    }); //父级路由合并到子级路由
    // const Category = require('../../models/Category')  //写在中间件里，被替代了

    //创建数据
    router.post('/',async (req,res) =>{
      const model = await req.Model.create(req.body);
      res.send(model);
    })
    //更新数据
    router.put('/:id',async (req,res) =>{ //用put 或者 post都可以，前端后端统一就行了
      const model = await req.Model.findByIdAndUpdate(req.params.id,req.body);
      res.send(model);
    })
    //删除数据
    router.delete('/:id',async (req,res) =>{
      await req.Model.findByIdAndDelete(req.params.id,req.body);
      res.send({
        success:true
      });
    })
    //获取全部
    router.get('/',async (req,res) =>{
      const queryOption= {};
      if(req.Model.modelName == "Category"){
        queryOption.populate = "parent";
      }
      // const items = await req.Model.find().populate('parent').limit(10);  //关联上级分类，返回上级分类的对象
      const items = await req.Model.find().setOptions(queryOption).limit(10);  //关联上级分类，返回上级分类的对象
      res.send(items);
    })
    //根据id获取
    router.get('/:id',async (req,res) =>{
      const model = await req.Model.findById(req.params.id)
      res.send(model);
    })
    app.use('/admin/api/rest/:resource',async(req,res,next) => { //添加中间件
      const modelName = require('inflection').classify(req.params.resource);  //使用inflection插件
      req.Model = require(`../../models/${modelName}`);  //将Model挂载在req上
      next();
    }, router)

    //图片上传    因为跟上面不同一个路由，所以用app
    //引入中间件multer，处理上传数据
    const multer = require("multer");
    const upload = multer({dest:__dirname + '/../../uploads'})

    app.post("/admin/api/upload",upload.single('file'),async (req,res) => {
      const file = req.file;
      file.url = `http://localhost:3000/uploads/${file.filename}`;
      res.send(file);
    })

    //登录
    app.post("/admin/api/login",async(req,res)=>{
      const {username,password} = req.body;
      //1.根据用户名查找用户
      const AdminUser = require("../../models/AdminUser");
      // const user =  await AdminUser.findOne({username:username}) // {username:username} == {username};
      const user =  await AdminUser.findOne({username}).select('+password'); //因为在编辑的接口写了默认不查询password字段，这里需要，所以要加上 .select('+password') 否则password返回会为空
      if(!user){
        return res.status(422).send({
          message:'用户不存在'
        })
      }

      //2.校验密码

      const isValid = require('bcryptjs').compareSync(password,user.password); // compareSync比较这明文和密文密码是否相同 password明文，用户提交上来的密码  user.password密文，加密后的密码，数据库获取的到的

      //3.返回token
    })

    
}