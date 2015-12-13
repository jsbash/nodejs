var fs = require("fs");
var data = fs.readFileSync("helloworld.js");
console.log(data.toString());
console.log("程序执行完毕");
