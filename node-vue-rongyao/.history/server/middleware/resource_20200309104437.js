module.exports = options => {
    return async(req,res,next) => { 
        const modelName = require('inflection').classify(req.params.resource);  //使用inflection插件
        req.Model = require(`../../models/${modelName}`);  //将Model挂载在req上
        next();
      }
}