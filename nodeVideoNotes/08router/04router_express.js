var http = require("http");
var url = require('url');

var G = {};

var app = function(req,res){
    var pathname = url.parse(req.url).pathname;
    if(!pathname.endsWith()){
        pathname = pathname + '/';
    }
    console.log(pathname)
    if(G[pathname]){
        G[pathname](req,res); //执行注册的方法
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
    G[string] = callback;
};

http.createServer(app).listen(8001);

//注册login这个路由（方法）
app.get('login',function (req,res) {
    console.log('login');
    res.end('login');
});

app.get('register',function (req,res) {
    console.log('register');
    res.end('register');
})
