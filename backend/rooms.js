const rooms = {};

function createRoom() {
    const roomId = Math.random().toString(36).substr(2, 6);
    rooms[roomId] = [];
    return roomId;
}

function joinRoom(roomId, ws) {
    if (!rooms[roomId]) rooms[roomId] = [];
    rooms[roomId].push(ws);
}

function broadcast(roomId, message, sender) {
    if (!rooms[roomId]) return;
    rooms[roomId].forEach(client => {
        if (client !== sender && client.readyState === 1) {
            client.send(JSON.stringify(message));
        }
    });
}

module.exports = { createRoom, joinRoom, broadcast };
