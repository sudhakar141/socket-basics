var socket = io();

socket.on('connect', function(){
    console.log('Connected to socket.io to server!');
});

socket.on('message', function(message){
    console.log('New message:');
    console.log(message.text);
});
