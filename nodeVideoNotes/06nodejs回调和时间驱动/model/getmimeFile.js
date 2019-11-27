exports.getMime = function(fs,extname,callback){

    fs.readFile('./mime.json',function(err,data){ //异步，有问题
        if(err){
            console.log('文件不存在！');
            return false;
        }
        // console.log(JSON.parse(data.toString()));
        var mine = JSON.parse(data.toString());
        var result = mine[extname] || 'text/html';;
        console.log(mine[extname]);
        callback(result);
    })
};