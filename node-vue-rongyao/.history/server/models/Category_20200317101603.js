/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:41:19 
 * @Last Modified by: author
 * @Last Modified time: 2020-03-17 10:16:02
 */

 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
     name:{type:String},
     parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'},
 })

 //????
 schema.virtual('children',{
     localField:'_id',
     foreignField:'parent',
     justOne:false,
     ref:'Category'
 })

 schema.virtual('newsList',{
    localField:'_id',
    foreignField:'categories',
    justOne:false,
    ref:'Article'
})

 module.exports = mongoose.model('Category',schema)