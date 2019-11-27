var tools = require('./tool.js');
// console.log(tools.tools.add(2,3));  //使用exports.tools = tools 方法导出调用tools
console.log(tools.add(2,3));  //使用module.exports = tools 方法导出调用tools

// var http = require('http');
//
// http.createServer(function (req,res) {
//
//     res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
//     res.write('hello boy !');
//     res.end();
// }).listen('8002','127.0.0.1');