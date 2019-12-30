const express = require('express');
const app = express();

app.use(require('cors')());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/elment-blog',{ //链接数据库，elment-blog为名字，没有就创建，有就链接
    useNewUrlParser:true,    //这三个数是防止数据库报错的
    useFindAndModify:true,
    useCreateIndex:true,
});

const Acticle = mongoose.model('Acticle',new mongoose.Schema({  //创建文章模型
    title:{type:string},
    body:{type:string},
}))

app.get('/',async(req,res)=>{
    res.send('index');
})

app.listen(3001,()=>{
    console.log('http://localhost:3001')
});