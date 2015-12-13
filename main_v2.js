var fs = require("fs");
fs.readFile("helloworld.js", function(err, data){
        if(err){
            console.error(err);
        }
        console.log(data.toString());
});

console.log("程序执行完毕");
