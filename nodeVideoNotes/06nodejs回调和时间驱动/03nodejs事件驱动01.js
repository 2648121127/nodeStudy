
//引入events模块 node内置模块

var events = require('events');

// console.log(events);

var EventEmitter = new events.EventEmitter();  //实例化

//广播和接收广播  demo
//发出广播
setTimeout(function(){
    console.log('开始广播');
    let aa = ['q','w','e']; //发送的数据
    EventEmitter.emit('toParent',aa);
},1000);

//接收广播
EventEmitter.on('toParent',function(data){
    console.log('接收到广播了');
    console.log(data);
});
