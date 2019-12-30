const express = require('express');
const app = express();

app.use(require('cors')());
app.use(express.json()); //让express识别客户端传过来的json

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/elment-blog',{ //链接数据库，elment-blog为名字，没有就创建，有就链接
    useNewUrlParser:true,    //这三个数是防止数据库报错的
    useFindAndModify:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
});

const Acticle = mongoose.model('Acticle',new mongoose.Schema({  //创建文章模型
    title:{type:String},
    body:{type:String},
}))

app.get('/',async(req,res)=>{
    res.send('index');
})

//新增文章

app.post('/api/acticle',async (req,res)=>{
    const acticle = await Acticle.create(req.body);
    res.send(acticle);
})

//文章列表
app.get('/api/acticle',async ()=>{
    const acticle = await Acticle.find();
    res.send(acticle);
})

app.listen(3001,()=>{
    console.log('http://localhost:3001')
});