const express = require('express');
const app = express();

app.use(require('cors')());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/elment-blog');

app.get('/',async(req,res)=>{
    res.send('index');
})

app.listen(3001,()=>{
    console.log('http://localhost:3001')
});