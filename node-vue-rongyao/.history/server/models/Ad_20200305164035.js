/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:41:19 
 * @Last Modified by: author
 * @Last Modified time: 2020-03-05 16:40:21
 */

 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
     name:{type:String},
     items:[{
        image:{type:String},
        url:{type:String},
     }],
 })

 module.exports = mongoose.model('Ad',schema)