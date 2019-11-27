
var url = require('url');

function changeRes(res){
    res.send = function(data){

        res.writeHead(200,{"content-Type":"text/html;charset='utf-8"});

        res.end(data)
    }
}

//暴露的模块
var server = function () {
    var G = this;
    this._get = {};
    this._post = {};

    var app = function(req,res){

        changeRes(res);

        var pathname = url.parse(req.url).pathname;

        if(!pathname.endsWith()){
            pathname = pathname + '/';
        }

        //获取请求方式
        var method = req.method.toLowerCase();

        console.log(G['_'+method][pathname])
        if(G['_'+method][pathname]){
            if(method == 'post'){  //如果为post请求执行
                var postStr  = '';
                req.on('data',function(chunk){
                    postStr += chunk;
                });
                req.on('end',function(err,chunk){

                    req.body = postStr;

                });

                G['_'+method][pathname](req,res); //执行注册的方法

            }else{  //为get请求时执行

                G['_'+method][pathname](req,res); //执行注册的方法

            }

        }else{
            res.end('no router')
        }
    };

    //定义一个get方法
    app.get = function(string,callback){
        if(!string.endsWith('/')){ //如果不以 '/' 结尾
            string = string+'/';
        }
        if(!string.startsWith('/')){ //如果不以 '/' 开头
            string = '/' + string;
        }
        G._get[string] = callback;
    };

    app.post = function(string,callback){
        if(!string.endsWith('/')){ //如果不以 '/' 结尾
            string = string+'/';
        }
        if(!string.startsWith('/')){ //如果不以 '/' 开头
            string = '/' + string;
        }
        G._post[string] = callback;
    };


    return app;

};
module.exports = server();