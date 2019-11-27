

//fs模块
var fs= require('fs');
//path模块
var path = require('path');
//url模块
var url = require('url');

//引入events
var events = require('events');

var EventEmitter = new events.EventEmitter();  //实例化

//获取文件类型的方法
function getMime(EventEmitter,extname){

    fs.readFile('./mime.json',function(err,data){ //异步，有问题
        if(err){
            console.log('文件不存在！');
            return false;
        }
        // console.log(JSON.parse(data.toString()));
        var mine = JSON.parse(data.toString());
        var result = mine[extname] || 'text/html';
        EventEmitter.emit('to_mime',result);
    })
};

exports.static = function (req,res,staticPath) {

    var pathname = url.parse(req.url).pathname; //获取URL的值

    if(pathname == '/'){ //路径为空时，默认加载首页
        pathname = 'index.html';
    }

    //获取文件后缀名
    var extname = path.extname(pathname); //例：.html .css等

    if(pathname != '/favicon.ico'){ //过滤请求

        fs.readFile(staticPath+'/'+pathname,function(err,data){
            if(err){ //没有这个文件
                console.log('404');
                fs.readFile(staticPath+'/'+'error.html',function(error,errData){
                    if(error){
                        console.log(error);
                    }
                    res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
                    res.write(errData);
                    res.end();
                })

            }else{ //有这个文件
                getMime(EventEmitter,extname); //调用获取数据的方法
                EventEmitter.on('to_mime',function(mime){
                    res.writeHead(200,{"Content-Type":""+mime+";charset='utf-8'"});
                    // res.write(data);
                    res.end(data);
                })
            }
        })
    }
}