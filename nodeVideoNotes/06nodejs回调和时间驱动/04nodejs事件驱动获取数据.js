
//引入events模块

var events = require('events');

var fs = require('fs');

// console.log(events);

var EventEmitter = new events.EventEmitter();  //实例化

function getMine(){
    fs.readFile('mime.json',function(err,data) {
        // console.log(data.toString());
        EventEmitter.emit('data',data);//发送广播
    })
};
getMine(); //执行函数

//接收广播
EventEmitter.on('data',function(data){
    console.log(data.toString())
})
