var http = require('http');
var url = require('url');

function iniciar(route, handle) {
  function onRequest(request, response) {
    var dataPosteada = "";
    var pathname = url.parse(request.url).pathname;
    request.setEncoding("utf8");
    request.addListener("data", function(trozoPosteado) {
          dataPosteada += trozoPosteado;
          console.log("Recibido trozo POST '" + trozoPosteado + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, dataPosteada);
    });
  }
  http.createServer(onRequest).listen(8888);
  console.log("servidor iniciado");
}
exports.iniciar = iniciar;
