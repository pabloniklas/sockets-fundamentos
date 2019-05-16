var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor.');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor.');
});

//Enviar info
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Recibir info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Info del servidor', mensaje);
});