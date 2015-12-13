var buf01 = new Buffer("菜鸟教程");
var buf02 = new Buffer("www.runoob.com");
var buf03 = Buffer.concat([buf01, buf02]);
console.log("buf03: " + buf03.toString());
