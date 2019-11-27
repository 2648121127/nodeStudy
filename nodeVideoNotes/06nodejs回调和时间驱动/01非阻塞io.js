var fs = require('fs');

function getMine(){
    fs.readFile('mime.json',function(err,data) {
        // console.log(data.toString());
        return data;
    })
};
console.log(getMine());  //异步，在外面拿不到数据，undefined

