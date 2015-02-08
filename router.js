function route(pathname,handle, response, request) {
  console.log("You are about to request for pathname" + pathname);
  if(typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 not found");
    response.end();
  }
}
exports.route = route;
