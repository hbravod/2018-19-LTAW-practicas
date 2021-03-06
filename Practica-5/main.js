const electron = require('electron')

console.log("Arrancando electron...")

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var usuarios = 0;

//-- Punto de entrada. En cuanto electron está listo,
//-- ejecuta esta función
electron.app.on('ready', ()=>{
  console.log("Evento Ready!")

  // Crear la ventana principal de nuestra Interfaz Gráfica
  win = new electron.BrowserWindow({
    width: 720,
    height: 576
  })


  //-- En la parte superior se nos ha creado el menu
  //-- por defecto
  //-- Si lo queremos quitar, hay que añadir esta línea
  //win.setMenuBarVisibility(false)

  //-- Cargar la interfaz gráfica, que se encuentra en el
  //-- fichero index.html

  win.loadFile('index.html')

//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){
  console.log('--> Usuario conectado!');

  usuarios += 1;

  //--Saludo al nuevo usuario
  msg = 'sup bru';
  socket.emit('new_message', msg);
  //-- Enviar a todos los usuarios salvo al nuevo
  msg = 'New homie in da hood';
  socket.broadcast.emit('new_message', msg);

  //-- Detectar si el usuario se ha desconectado
  socket.on('disconnect', function(){
  console.log('--> Usuario Desconectado');
  usuarios -= 1;
  msg = 'Un bro huyó del hood'
  io.emit('new_message', msg)
  });

  //-- Detectar si se ha recibido un mensaje del cliente
  socket.on('new_message', msg => {
    if (msg == '/help'){
      msg = 'Comandos soportados:' + '<br><br>' + '/list: Devolverá el número de usuarios conectados<br> /hello: El servidor nos devolverá el saludo<br> /date: Nos devolverá la fecha<br>';
      socket.emit('new_message', msg);
    }
    else if (msg == '/list') {
      msg = 'Número de usuarios conectados: ' + usuarios.toString();
      socket.emit('new_message', msg);

    } else if (msg == '/hello') {
      msg = 'Yo, ma man! ';
      socket.emit('new_message', msg);

    } else if (msg == '/date') {
      let f = new Date();
      // msg = 'La fecha actual es: ' + f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
      let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
      let dias = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

      msg = 'La fecha actual es: ' + dias[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
      socket.emit('new_message', msg);

    }else {
      //Emitir mensaje a todos clientes conectados
      io.emit('new_message', msg);
    }

    //-- Notificarlo en la consola del servidor
    console.log("Mensaje recibido: " + msg)
  });

});

})