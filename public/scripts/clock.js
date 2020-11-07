    const socket = io();

    socket.on('data', update);

    function update(data){

        let timer = document.getElementById('timer');

        timer.innerText = data.toString();

    }