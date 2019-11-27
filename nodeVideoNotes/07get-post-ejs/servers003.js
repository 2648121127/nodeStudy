

//1.引入http模块
var http = require('http');

var url = require('url');

var ejs = require('ejs');


http.createServer(function(req,res){

    res.writeHead("200",{"Content-Type":"text/html;chartset='utf-8'"})

    var patname = url.parse(req.url).pathname;

    if(patname == '/login'){
        var data = "我是后台数据";
        var list = ['111','333','5555','66666'];
        ejs.renderFile("views/login.ejs",{
            msg:data,
            list:list
        },function(err,data){
            res.end(data);
        })
    }else if(patname == '/register'){
        var data = "<h2>我是html标签里的数据</h2>";
        ejs.renderFile("views/register.ejs",{
            msg:data
        },function(err,data){
            res.end(data);
        });
    }else if(patname == '/order'){
        res.end('order');
    }else{
        res.end('index')
    }

}).listen('8000');