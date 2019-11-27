var fs = require('fs');

//1.检测是文件还是目录
/*
fs.stat('html',function (err,stats) {
    if(err){
        console.log(err);
        return false;
    }
    console.log('文件：'+stats.isFile());       //false
    console.log('目录：'+stats.isDirectory());  //true
})*/
//2. fs.mkdir 创建目录
    /*
    接收参数：
    path        创建的目录路径
    mode        目录权限（读写权限），默认0777
    callback    回调，传递异常参数err
    */
/*
fs.mkdir('css',function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log('创建目录成功')
})*/

//2. fs.writeFile创建写入文件
    /*
    filename       (String)             文件名
    data           (String | Buffer)    将要写入的内容，可以使用字符串或者Buffer数据
    options        (Object)             option数组对象，包含：
        .encoding   (string)            可选值，默认 'utf8'，当data是Buffer时，该值应该为ignored
        .mode       (number)            文件读写权限，默认值438
        .flag       (string)            默认'w'
    callback       (function)           回调，传递一个异常参数err。
    */
/*fs.writeFile('t1.txt','你好nodejs!','utf8',function(err){ //如果已经存在，那么将被替换。
    if(err){
        console.log(err);
        return false;
    }
    console.log('写入成功！')
});*/

//3.fs.appendFile 追加文件
/*fs.appendFile('t2.txt','这是写入的内容,jiajia','utf8',function(err){ //没有就创建，有就追加进去
    if(err){
        console.log(err);
        return false;
    }
    console.log('追加成功！')
});*/

//4.fs.readFile  读取文件

/*fs.readFile('t2.txt',function(err,data){
    if(err){
        console.log(err);
        return false;
    };
    console.log(data.toString());
})*/

//5.fs.readdir 读取目录

fs.readdir()
