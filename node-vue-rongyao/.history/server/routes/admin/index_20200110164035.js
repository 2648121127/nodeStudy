/*
 * @Author: JianMo 
 * @Date: 2020-01-03 17:22:11 
 * @Last Modified by: JianMo
 * @Last Modified time: 2020-01-10 16:40:34
 */

 const express = require("express");
 const app = express();
 app.use(require('cors')());
 app.use(express.json())

 require('./plugin/db');
 require('./routes/admin');

 app.listen(3000,()=>{
     console.log('http://localhost:3000');
 })