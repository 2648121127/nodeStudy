//管道流

var fs = require('fs');

//创建一个可读流
var readStream = fs.createReadStream('input.txt');

//创建一个可写流
var writeStream = fs.createWriteStream('output.txt');

// 管道流操作  读取input.txt文件内容，写入output.txt文件
readStream.pipe(writeStream);