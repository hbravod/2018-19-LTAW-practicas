var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var usuarios = 0;

//--Servir la pagina principal
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("Página principal: /")
});

//-- Servir el cliente javascript
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  console.log("Fichero js o cliente solicituado")
});

//-- Lanzar el servidor
http.listen(3000, function(){
  console.log('listening on *:3000');
});

//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){
  console.log('--> Usuario conectado!');

  nuevo_usuario = usuarios + 1;

  //--Saludo al nuevo usuario
  msg = 'sup bru';
  socket.emit('new_message', msg);
  //-- Enviar a todos los usuarios salvo al nuevo
  msg = 'new homie in da hood';
  socket.broadcast.emit('new_message', msg);

  //-- Detectar si el usuario se ha desconectado
  socket.on('disconnect', function(){
  console.log('--> Usuario Desconectado');
  usuarios = usuarios - 1;
  });

  //-- Detectar si se ha recibido un mensaje del cliente
  socket.on('new_message', msg => {
    if (msg == '/help'){
      msg = 'Comandos soportados:' + '<br><br>' + '/list: Devolverá el número de usuarios conectados<br> /hello: El servidor nos devolverá el saludo<br> /date: Nos devolverá la fecha<br>';
      socket.emit('new_message', msg);
    }
    else if (msg == '/list') {
      msg = 'Número de usuarios conectados: ' + user.toString();
      socket.emit('new_message', msg);
    } else if (msg == '/hello') {
      msg = 'Hello, whats up! ';
      socket.emit('new_message', msg);
    } else if (msg == '/date') {
      let f = new Date();
      // msg = 'La fecha actual es: ' + f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
      let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
      let diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

      msg = 'La fecha actual es: ' + diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
      socket.emit('new_message', msg);
    }else {
      //Emitir mensaje todos clientes conectados
      io.emit('new_message', msg);
    }

    //-- Notificarlo en la consola del servidor
    console.log("Mensaje recibido: " + msg)

      //-- Emitir un mensaje a todos los clientes conectados
      io.emit('new_message', msg);
  });

});