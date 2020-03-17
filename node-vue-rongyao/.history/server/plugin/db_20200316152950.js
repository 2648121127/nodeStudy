/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:35:23 
 * @Last Modified by: author
 * @Last Modified time: 2020-03-16 15:29:49
 */

 module.exports = app =>{
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-rongyao',{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    require('require-all')(__dirname + '/../models')
 }