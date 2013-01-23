var http = require("http");
var url = require("url");
var fs = require("fs");

//server config
var config = JSON.parse(fs.readFileSync("config.json")),
	host = config.host,
	port = config.port;

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(port,host);
  console.log("Server has started and listening on : "+ host +":"+ port );

}

exports.start = start;