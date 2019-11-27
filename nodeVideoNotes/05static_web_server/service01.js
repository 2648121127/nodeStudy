//1.引入http模块
var http = require('http');
var fs= require('fs');
var path = require('path');

//引入自定义模块
var mimeModel = require('./model/getmime.js');
console.log(mimeModel.getMime('q.html'))

http.createServer(function(req,res){
    var pathname = req.url;

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
                var mime = mimeModel.getMime(extname); //获取文件类型
                res.writeHead(200,{"Content-Type":""+mime+";charset='utf-8'"});
                res.write(data);
                res.end();
            }
        })
    }

}).listen('8001');