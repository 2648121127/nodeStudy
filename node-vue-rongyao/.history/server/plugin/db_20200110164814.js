/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:35:23 
 * @Last Modified by: JianMo
 * @Last Modified time: 2020-01-10 16:48:13
 */

 module.exports = app=>{
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-rongyao',{
        useNewUrlParser:true,
    })
 }