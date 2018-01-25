var http = require('http');

var express = require("express");
var app = express();
var fs = require("fs");

app.use('/RESOURCES',express.static(__dirname + '/RESOURCES'));

//var port2 = process.env.PORT || 3001;
//var server = app.listen(port2);

var server = http.createServer(function(request, response) {

    response.writeHead(200,{"Content-Type": "text/html"});
    
      fs.readFile('./RESOURCES/home.html', 'utf8', function(error, data) {
        if (error) {
          response.writeHead(404);
          response.write('File not found!');
        }
        else {
          response.write(data);
        }
        response.end();
      });
      /*
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
*/
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
