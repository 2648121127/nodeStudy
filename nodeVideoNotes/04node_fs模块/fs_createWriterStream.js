const fs = require('fs');

var data = "写入文件，写入文件\n";

var writeStream = fs.createWriteStream('output.txt');

//加个循环多次写入
for(var i=0;i<100;i++){
    writeStream.write(data,'utf8');
}

//标记写入完成
writeStream.end();

writeStream.on('finish',function(err){
    console.log('写入完成');
});

writeStream.on('error',function(err){
    console.log('写入失败');
});