var http = require("http");
http.createServer(function(request, response){
    response.writeHead(200, {'Content_type':'text/plain'});
    response.end("Hello world!");
}).listen(8888);
console.log("Server is running at http://127.0.1.1:8888");

