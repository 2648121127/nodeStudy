exports.getMime = function(fs,extname){

    fs.readFile('./mime.json',function(err,data){ //异步，有问题
        if(err){
            console.log('文件不存在！');
            return false;
        }
        // console.log(JSON.parse(data.toString()));
        var mine = JSON.parse(data.toString());
        console.log(mine[extname]);
        return mine[extname] || 'text/html';
    })
};