var fs = require('fs');
//1.判断服务器上有没有upload目录，没有就创建  （图片上传）

/*fs.stat('upload',function (err,stats){
    if(err){
        fs.mkdir('upload',function(error){
            if(error){
                console.log(err);
                return false;
            }
            console.log('创建成功')
        })
        console.log(err);
    }else{
        console.log('目录已经存在');
        console.log('目录：'+stats.isDirectory());
    }
})*/




//2.找出html目录下的所有目录，然后打印出来

//错误写法
/*fs.readdir('html',function(err,files){
    if(err){
        console.log(err);
    }else{ //判断是目录还是文件
        console.log(files);   //数组
        for(var i=0;i<files.length;i++){
            fs.stat(files[i],function(error,stats){  //循环判断是目录还是文件  --异步
                console.log(files[i]);  //无法拿到，结果是四个undefined
            })
        }
    }
});*/

//异步例子解析  打印出：3  3  3
/*
for(var i=0;i<3;i++){
    //异步
    setTimeout(function(){
        console.log(i);
    },100);
}*/

//正确写法，用匿名自执行函数解决异步问题
var filesArr = [];
fs.readdir('html',function(err,files){
    if(err){
        console.log(err);
    }else{ //判断是目录还是文件
        console.log(files);   //数组
        (function getFiles(i){

            if(i == files.length){//循环结束
                console.log(filesArr);  //打印目录
                return false;
            }

            fs.stat('html/'+files[i],function(error,stats){  //循环判断是目录还是文件  --异步
                console.log(files[i]);  //无法拿到，结果是四个undefined
                if(stats.isDirectory()){
                    filesArr.push(files[i]);   //存数组
                }
                //递归调用
                getFiles(i+1);
            });
        })(0);
    }
});
