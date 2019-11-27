const fs = require('fs');

//流的方式读取文件  w文件比较大的时候可以使用流的方式，小的话可以用readFilse方式

var readStream = fs.createReadStream('input.txt');

var str = ''; //保存数据

readStream.on('data',function(chunk){
    str += chunk;
});
//读取完成
readStream.on('end',function(chunk){
    console.log(str);
});
//读取失败
readStream.on('error',function(err){
    console.log(err);
});