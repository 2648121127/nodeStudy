/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:41:19 
 * @Last Modified by: author
 * @Last Modified time: 2020-03-06 09:21:23
 */

 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
     username:{type:String},
     password:{
        type:String,
        select:false,
        set(val){
            return require('bcryptjs').hashSync(val,10)
        }
    },
 })

 module.exports = mongoose.model('AdminUser',schema)