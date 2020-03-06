/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:30:39 
 * @Last Modified by: JianMo
 * @Last Modified time: 2020-01-10 16:43:38
 */
module.exports = app =>{
    const express = require('express');
    const router = express.Router();
    const Category = require('../../models/Category')  //写在中间件里，被替代了

    //创建数据
    router.post('/',async (req,res) =>{
      const model = await Category.create(req.body);
      res.send(model);
    })
    //更新数据
    router.put('/:id',async (req,res) =>{ //用put 或者 post都可以，前端后端统一就行了
      const model = await Category.findByIdAndUpdate(req.params.id,req.body);
      res.send(model);
    })
    //删除数据
    router.delete('/:id',async (req,res) =>{
      await Category.findByIdAndDelete(req.params.id,req.body);
      res.send({
        success:true
      });
    })
    //获取全部
    router.get('/',async (req,res) =>{
      const modelName = require('inflection').classify(req.params.resource);
      return res.send({ req.params.resource });
      const items = await Category.find().populate('parent').limit(10);  //关联上级分类，返回上级分类的对象
      res.send(items);
    })
    //根据id获取
    router.get('/:id',async (req,res) =>{
      const model = await Category.findById(req.params.id)
      res.send(model);
    })
    app.use('/admin/api/rest/:resource',router)
    // async(req,res,next) => { //添加中间件
    //   const modelName = require('inflection').classify(req.params.resource);
    //   req.Model = require(`../../models/${modelName}`);
    //   next();
    // }, 
}