/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:41:19 
 * @Last Modified by: author
 * @Last Modified time: 2020-03-05 14:27:38
 */

 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
     categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
     title:{type:String},
     body:{type:String},
 })

 module.exports = mongoose.model('Article',schema)