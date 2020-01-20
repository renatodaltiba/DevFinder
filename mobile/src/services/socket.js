import socketio from 'socket.io-client';
//Put your own IP address
const socket = socketio('http://192.168.2.3:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction);
}

function connect (latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    }
    socket.connect();
}

function disconnect() {
    if (socket.connect) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
};
