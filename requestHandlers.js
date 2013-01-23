var fs = require("fs");

function home (response){
  console.log("Request handler 'home' was called.");

  var content = fs.readFileSync("./views/home.html");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(content);
    response.end();
}

function about (response){
	console.log("Request handler 'about' was called.");
	var content = fs.readFileSync("./views/about.html");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(content);
    response.end();
}


exports.home = home;
exports.about = about;
