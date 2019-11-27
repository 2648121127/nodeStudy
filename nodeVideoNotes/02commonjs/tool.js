var tools = {
    add:function(a,b){
        return a*b;
    },
    sayHello:function(){
        return "hello nodejs !";
    }
};

// exports.tools = tools;
module.exports = tools;