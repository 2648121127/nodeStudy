

//1.引入http模块
var http = require('http');

var url = require('url');

var ejs = require('ejs');

var fs = require('fs');


http.createServer(function(req,res){

    res.writeHead("200",{"Content-Type":"text/html;chartset='utf-8'"})

    var patname = url.parse(req.url,true).pathname; //获取路由

    var method = req.method.toLowerCase(); //获取请求的方式,例如: get / post , 转换成小些
    // console.log(method);

    if(patname == '/login'){
        ejs.renderFile("views/form.ejs",{},function(err,data){
            res.end(data);
        })
    }else if(patname == '/dologin' && method=='get'){
        console.log(url.parse(req.url,true).query);
        res.end('dologin');

    }else if(patname == '/dologin' && method=='post'){
        var postStr  = '';
        req.on('data',function(chunk){
            postStr += chunk;
        });
        req.on('end',function(err,chunk){

            console.log(postStr);
            fs.appendFile("login.txt",postStr+'\n',function(error){
                if(error){
                    console.log('写入失败');
                    return
                }else{
                    console.log('写入成功');
                }
            });
            res.end("<script>alert('登陆成功');history.back();</script>");

        })

    }else{
        ejs.renderFile("views/index.ejs",{},function(err,data){
            res.end(data);
        });
    }

}).listen('8001');