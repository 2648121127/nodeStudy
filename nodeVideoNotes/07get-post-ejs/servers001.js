

//1.引入http模块
var http = require('http');


//引入自定义模块
var router = require('./model/router.js');

http.createServer(function(req,res){

    router.static(req,res,'wx_h5');

}).listen('8001');