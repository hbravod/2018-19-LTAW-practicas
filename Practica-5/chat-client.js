//-const io = require('socket.io-client');
const socket = io('http://localhost:3000');

function main(){
    console.log("Hola mundo!!")

    //-- Crear un socket.io. Se establece la conexion
    //-- con el servidor
    var socket = io.connect('http://localhost:3000');

     //-- Obtener los elementos de interfaz:

  //-- Boton de envio de mensaje
  var send = document.getElementById('send')

  //-- Parrafo para mostrar mensajes recibidos
  var display = document.getElementById('display')

  //-- Caja con el mensaje a enviar
  var msg = document.getElementById("msg")

  //-- Cuando se aprieta el botón de enviar...
  send.onclick = () => {

    //-- Enviar el mensaje, con el evento "new_message"
    socket.emit('new_message', msg.value);
    document.getElementById('msg').value = '';

    //-- Lo notificamos en la consola del navegador
    console.log("Mensaje emitido")
  }

    //-- Cuando se reciba un mensaje del servidor se muestra
    //-- en el párrafo
    socket.on('new_message', msg => {
        var mensaje = document.createElement("P");
    mensaje.innerHTML = msg;
    mensajes.appendChild(mensaje);
  });

}