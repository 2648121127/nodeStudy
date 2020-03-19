/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:41:19 
 * @Last Modified by: author
 * @Last Modified time: 2020-03-17 09:53:20
 */

 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
     categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
     title:{type:String},
     body:{type:String},
 },{
    // timestamps: {
    //     createdAt: 'created',
    //     updatedAt: 'updated'
    // }
    timestamps:true  //默认加上时间戳，录入数据的时候，自动添加创建时间和更新时间
 })

 module.exports = mongoose.model('Article',schema)