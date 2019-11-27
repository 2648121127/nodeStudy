
var http = require("http");

var ejs = require('ejs');

var app = require('./model/express_router.js');

http.createServer(app).listen(8001);

//注册login这个路由（方法）
app.get('/login',function (req,res) {
    // console.log(app);

    ejs.renderFile('views/form.ejs',{},function(err,data){
        res.send(data)
    });

    res.send('login');
});
app.post('/dologin',function(req,res){

    // console.log(req.body);

    res.send("<script>alert('登陆成功');history.back();</script>");
});

app.get('/register',function (req,res) {
    console.log('register');
    res.send('register');
})
