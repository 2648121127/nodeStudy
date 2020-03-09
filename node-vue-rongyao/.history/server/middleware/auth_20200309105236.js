module.exports = options => { //写成函数形式方便改造，增加了可扩展性 （低耦合）
    const jwt = require('jsonwebtoken');
    const HttpAssert = require('http-assert'); 
    const AdminUser = require("../models/AdminUser");
    return async (req,res,next) => {
        const token = String(req.headers.authorization || '').split(' ').pop(); //pop获取后面的那个值
        HttpAssert(token,401,'请先登录'); //没有token
        const {id} = jwt.verify(token,req.app.get('secret'))  //verify验证并验证对错  decode解开，但不会验证 
        HttpAssert(id,401,'请先登录');  //无效token             //app.get只能传一个参数，这里的get跟路由的get其实名字是冲突了的（重名了），这里通过参数名来确定是定义路由还是获取配置
        req.user = await AdminUser.findById(id);              //在这没有qpp.get所以要用req.qpp.get
        HttpAssert(req.user,401,'请先登录');
        await next();
      }
}