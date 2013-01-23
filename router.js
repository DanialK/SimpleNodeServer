var fs = require("fs");

function route(handle, pathname, response, request) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    var content = fs.readFileSync("./views/404.html");
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write(content);
    response.end();
  }
}

exports.route = route;