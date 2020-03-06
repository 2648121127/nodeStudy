/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:41:19 
 * @Last Modified by: author
 * @Last Modified time: 2020-03-06 11:33:34
 */

 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
     username:{type:String},
     password:{
        type:String,
        select:false,
        set(val){
            //npm install bcryptjs  安装加密工具
            return require('bcryptjs').hashSync(val,10); //hashSync(加密的值，加密等级 一般10~12 越大越安全但是文件也大)
        }
    },
 })

 module.exports = mongoose.model('AdminUser',schema)