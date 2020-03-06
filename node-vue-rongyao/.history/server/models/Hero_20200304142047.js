/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:41:19 
 * @Last Modified by: JianMo
 * @Last Modified time: 2020-01-10 11:49:48
 */

 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
     name:{type:String},
     avatar:{type:String},
 })

 module.exports = mongoose.model('Hero',schema)