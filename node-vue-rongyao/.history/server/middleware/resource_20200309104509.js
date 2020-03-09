module.exports = options => { //写成函数形式方便改造，增加了可扩展性 （低耦合）
    return async(req,res,next) => { 
        const modelName = require('inflection').classify(req.params.resource);  //使用inflection插件
        req.Model = require(`../models/${modelName}`);  //将Model挂载在req上
        next();
      }
}