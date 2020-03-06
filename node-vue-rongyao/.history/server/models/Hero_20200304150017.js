/*
 * @Author: author 
 * @Date: 2020-03-04 15:00:15 
 * @Last Modified by:   author 
 * @Last Modified time: 2020-03-04 15:00:15 
 */


 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
     name:{type:String},
     avatar:{type:String},
 })

 module.exports = mongoose.model('Hero',schema)