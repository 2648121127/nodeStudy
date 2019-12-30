const express = require('express');
const app = express();

app.get('/',async(req,res)=>{
    res.send('index');
})

app.listen(3001,()=>{
    console.log('http://localhost:3001')
});