/*
 * @Author: JianMo 
 * @Date: 2020-01-03 17:22:11 
 * @Last Modified by: JianMo
 * @Last Modified time: 2020-01-06 11:37:25
 */

 const express = require("express");
 const app = express();

 require('./plugin/db');
 require('./routes/admin')

 app.listen(3000,()=>{
     console.log('http://localhost:3000');
 })