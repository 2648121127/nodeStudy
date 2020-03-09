/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:30:39 
 * @Last Modified by: author
 * @Last Modified time: 2020-03-09 10:43:47
 */
module.exports = app =>{
    const express = require('express');
    const jwt = require('jsonwebtoken');
    const HttpAssert = require('http-assert'); 

    const AdminUser = require("../../models/AdminUser");
    
    const router = express.Router({
      mergeParams:true,
    }); //父级路由合并到子级路由
    // const Category = require('../../models/Category')  //写在中间件里，被替代了

    //登录中间件
    const authMiddleware = require('../../middleware/auth');  //封装成了函数，所以调用的时候需要用函数的使用方法，加上括号
    //添加自动获取模型中间件
    const resourceMiddelware = require('../../middleware/resource');


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

    app.use('/admin/api/rest/:resource',authMiddleware, resourceMiddelware,router)

    //图片上传    因为跟上面不同一个路由，所以用app
    //引入中间件multer，处理上传数据
    const multer = require("multer");
    const upload = multer({dest:__dirname + '/../../uploads'})

    app.post("/admin/api/upload",authMiddleware,upload.single('file'),async (req,res) => {
      const file = req.file;
      file.url = `http://localhost:3000/uploads/${file.filename}`;
      res.send(file);
    })

    //登录
    app.post("/admin/api/login",async(req,res)=>{
      const {username,password} = req.body;
      //1.根据用户名查找用户
      // const user =  await AdminUser.findOne({username:username}) // {username:username} == {username};
      const user =  await AdminUser.findOne({username}).select('+password'); //因为在编辑的接口写了默认不查询password字段，这里需要，所以要加上 .select('+password') 否则password返回会为空
      
      // if(!user){
      //   return res.status(422).send({
      //     message:'用户不存在'
      //   })
      // }
      
      HttpAssert(user,422,'用户不存在');

      //2.校验密码

      const isValid = require('bcryptjs').compareSync(password,user.password); // compareSync比较这明文和密文是否相同  password明文，用户提交上来的密码  user.password密文，加密后的密码，数据库获取的到的
      // if(!isValid){
      //   return res.status(422).send({
      //     message:'密码错误'
      //   })
      // }
      HttpAssert(isValid,422,'密码错误');

      //3.返回token
      //首先安装jsonwebtoken模块，做web的token验证  npm i jsonwebtoken  ,然后引用 const jwt = require('jsonwebtoken');
      const token = jwt.sign({id:user._id},app.get('secret')) //只能传一个参数，这里的get跟路由的get其实名字是冲突了的（重名了），这里通过参数名来确定是定义路由还是获取配置
      res.send({token});
    })

    //错误处理函数（使用了http-assert模块后，需要捕获错误信息返回错误提示给前端）
    app.use(async (err,req,res,next)=>{
      res.status(err.statusCode || 500).send({
        message:err.message,
      })
    })
    
}