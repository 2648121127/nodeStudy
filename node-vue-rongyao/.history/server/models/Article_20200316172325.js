/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:41:19 
 * @Last Modified by: author
 * @Last Modified time: 2020-03-16 17:23:24
 */

 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
     categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
     title:{type:String},
     body:{type:String},
 },{
    timesTamps:true  //默认加上时间戳， 创建时间和更新时间
 })

 module.exports = mongoose.model('Article',schema)