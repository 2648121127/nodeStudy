/*
 * @Author: JianMo 
 * @Date: 2020-01-03 17:22:11 
 * @Last Modified by: author
 * @Last Modified time: 2020-03-06 15:47:09
 */

 const express = require("express");
 const app = express();

 //（这里是要在token处使用）给全局加个属性
 app.set('secret','zhizhisuibiansheding');//添加token的时候，正常的是要把这个值添加到环境中去，不应该保存在代码里的

 app.use(require('cors')());
 app.use(express.json())
 //静态文件托管,让uploads里面的文件都可以通过/uploads来访问
 app.use("/uploads",express.static(__dirname+'/uploads'))

 require('./plugin/db')(app);
 require('./routes/admin')(app);

 app.listen(3000,()=>{
     console.log('http://localhost:3000');
 })