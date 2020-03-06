/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:30:39 
 * @Last Modified by: JianMo
 * @Last Modified time: 2020-01-10 16:43:38
 */
module.exports = app =>{
    const express = require('express');
    const router = express.Router();
    const Category = require('../../models/Category')

    //创建数据
    router.post('/categories',async (req,res) =>{
      const model = await Category.create(req.body);
      res.send(model);
    })
    //更新数据
    router.post('/categories',async (req,res) =>{
      const model = await Category.create(req.body);
      res.send(model);
    })
    //获取全部
    router.get('/categories',async (req,res) =>{
      const items = await Category.find().limit(10);
      res.send(items);
    })
    //根据id获取
    router.get('/categories/:id',async (req,res) =>{
      const model = await Category.findById(req.params.id)
      res.send(model);
    })
    app.use('/admin/api',router)
}