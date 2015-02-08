var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname
    var postData = "";
    console.log("Request for "+ pathname + " received");
    route(pathname, handle, response, request);
  }

  http.createServer(onRequest).listen(9000);
  console.log("Server has started");
}

exports.start = start
