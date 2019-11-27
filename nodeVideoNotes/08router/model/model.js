var ejs = require('ejs');

var fs = require('fs');

var app = {
    login:function(req,res){

        ejs.renderFile('views/form.ejs',{},function(err,data) {
            res.end(data)
        })
    },
    register:function(req,res){
        res.end('register')
    },
    dologin:function(req,res){  //post
        var postStr  = '';
        req.on('data',function(chunk){
            postStr += chunk;
        });
        req.on('end',function(err,chunk){

            console.log(postStr);
            fs.appendFile("login.txt",postStr+'\n',function(error){
                if(error){
                    console.log('写入失败');
                    return
                }else{
                    console.log('写入成功');
                }
            });
            res.end("<script>alert('登陆成功');history.back();</script>");

        })
    },
    home:function(req,res){
        res.end('home')
    }
}

module.exports = app;