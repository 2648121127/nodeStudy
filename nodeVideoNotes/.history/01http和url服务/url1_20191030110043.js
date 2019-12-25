//1.引入http模块
var http = require('http');
//引入URL模块
var url = require('url');

//2.用户http创建服务
/*
req 获取url信息(request)
res 浏览器返回响应信息(response)
*/
http.createServer(function(req,res){
    //发送http头部
    //http 状态值：200：OK
    //设置http头部，状态码200，文件类型是html，字符集是utf-8

    //req.url获取浏览器url输入的信息
    if(req.url != '/favicon.ico'){
        var result = url.parse(req.url,true);
        console.log(result.query.id);
    }


    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    res.write('hello url');
    res.end();

}).listen('8001');