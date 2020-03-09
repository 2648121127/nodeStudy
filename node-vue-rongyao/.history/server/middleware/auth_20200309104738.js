module.exports = options => { //写成函数形式方便改造，增加了可扩展性 （低耦合）
    const jwt = require('jsonwebtoken');
    const HttpAssert = require('http-assert'); 
    const AdminUser = require("../models/AdminUser");
    return async (req,res,next) => {
        const token = String(req.headers.authorization || '').split(' ').pop(); //pop获取后面的那个值
        HttpAssert(token,401,'请先登录'); //没有token
        const {id} = jwt.verify(token,req.app.get('secret'))  //verify验证并验证对错  decode解开，但不会验证 
        HttpAssert(id,401,'请先登录');  //无效token
        req.user = await AdminUser.findById(id);
        HttpAssert(req.user,401,'请先登录');
        await next();
      }
}