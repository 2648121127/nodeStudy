
//用events解决异步

//1.引入http模块
var http = require('http');
//fs模块
var fs= require('fs');
//path模块
var path = require('path');
//url模块
var url = require('url');

//引入events
var events = require('events');

var EventEmitter = new events.EventEmitter();  //实例化



//引入自定义模块
var mimeModel = require('./model/getmimefile_events.js');

http.createServer(function(req,res){

    var pathname = url.parse(req.url).pathname;
    if(pathname == '/'){ //路径为空时，默认加载首页
        pathname = 'index.html';
    }

    //获取文件后缀名
    var extname = path.extname(pathname);

    if(pathname != '/favicon.ico'){ //过滤请求

        fs.readFile('wx_h5/'+pathname,function(err,data){
            if(err){ //没有这个文件
                console.log('404');
                fs.readFile('wx_h5/error.html',function(error,errData){
                    if(error){
                        console.log(error);
                    }
                    res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
                    res.write(errData);
                    res.end();
                })

            }else{ //有这个文件
                mimeModel.getMime(fs,EventEmitter,extname); //调用获取数据的方法
                EventEmitter.on('to_mime',function(mime){
                    res.writeHead(200,{"Content-Type":""+mime+";charset='utf-8'"});
                    // res.write(data);
                    res.end(data);
                })
            }
        })
    }
}).listen('8001');