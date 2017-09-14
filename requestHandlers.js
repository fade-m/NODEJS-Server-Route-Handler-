var querystring = require('querystring');

function iniciar(response, postData) {
  console.log("manipulador de peticion iniciar ha sido llamado");
  //return "Hola Iniciar";
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function subir(response, dataPosteada) {
  console.log("manipulador de peticion subir ha sido llamado");
  //return "Hola subir" en vez de retornar usamos en response para repsonder directamente desde aqui;
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Tu enviaste: " + querystring.parse(dataPosteada)["text"]);
  response.end();
}


exports.iniciar = iniciar;
exports.subir = subir;
