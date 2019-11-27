var fs = require('fs');

/*function getMine(callback){
    fs.readFile('mime.json',function(err,data) {
        // console.log(data.toString());
        callback(data);
    })
};
console.log(getMine());  //异步，在外面拿不到数据，undefined*/

function getMine(callback){
    fs.readFile('mime.json',function(err,data) {
        // console.log(data.toString());
        callback(data);
    })
};
getMine(function(result){
    console.log(result.toString());
});

