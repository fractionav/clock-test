const express = require('express');
const socket = require('socket.io');
const cors = require('cors');  

const webPort = 25000;
let clock = 60;
let strClock = '';

const app = express();
app.use(cors());
const server = app.listen(webPort);

app.use(express.static('public'));

const io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){

    console.log("New connection");
}

// io sending

timer = setInterval(trigger, 1000);

function trigger(){
    if (clock == 0){
        clock = 60;
    }
    clock--;

    if (clock < 10){
        strClock = "0" + clock.toString();
    }
    else{
        strClock = clock.toString();
    }

    let message = "00:" + strClock;

    console.log(message);

   io.sockets.emit('data', message);   

}