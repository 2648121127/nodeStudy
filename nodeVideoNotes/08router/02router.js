
var http = require("http");

var url = require("url");

var model = require("./model/model.js");

http.createServer(function(req,res){

    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8"});

    var pathname = url.parse(req.url).pathname.replace('/','');  //获取路由

    if(pathname != 'favicon.ico'){
        try{
            model[pathname](req,res);
        }catch(err){
            model['home'](req,res);
        }

    }

}).listen('8001');