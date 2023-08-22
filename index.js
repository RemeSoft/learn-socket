const express = require('express');
const app = express();
const http= require('http');
const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(expressServer);

io.on('connection', function(socket){
    console.log("New User Connected");

    setTimeout(function (){
        socket.send("Data comes form server side");
    }, 5000);
});

app.get('/',function (req, res){
    res.sendFile(__dirname+"/index.html")
});


expressServer.listen(3000, ()=>{
    console.log("Server listening on port 3000");
})