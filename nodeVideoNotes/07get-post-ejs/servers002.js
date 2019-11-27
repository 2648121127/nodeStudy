

//1.引入http模块
var http = require('http');

var url = require('url');


http.createServer(function(req,res){

    var patname = url.parse(req.url).pathname;

    if(patname == '/login'){
        res.end('login');
    }else if(patname == '/register'){
        res.end('register');
    }else if(patname == '/order'){
        res.end('order');
    }else{
        res.end('index')
    }

}).listen('8000');