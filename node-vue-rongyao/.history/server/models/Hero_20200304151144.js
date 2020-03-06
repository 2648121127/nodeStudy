/*
 * @Author: bei 
 * @Date: 2020-03-04 15:11:35 
 * @Last Modified by:   bei 
 * @Last Modified time: 2020-03-04 15:11:35 
 */

 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
     name:{type:String},
     avatar:{type:String},
 })

 module.exports = mongoose.model('Hero',schema)