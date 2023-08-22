const express = require('express');
const app = express();
const http= require('http');
const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(expressServer);

app.get('/',function (req, res){
    res.sendFile(__dirname+"/index.html")
});


expressServer.listen(3000, ()=>{
    console.log("Server listening on port 3000");
})