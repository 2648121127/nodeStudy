//1.引入http模块
var http = require('http');

//2.用户http创建服务
    /*
    req 获取url信息(request)
    res 浏览器返回响应信息(response)
    */
http.createServer(function(req,res){
    //发送http头部
    //http 状态值：200：OK
    //设置http头部，状态码200，文件类型是html，字符集是utf-8
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    res.write('hello node.js');
    res.end();

}).listen('8001');