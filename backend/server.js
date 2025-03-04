const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const cors = require("cors");
const { createRoom, joinRoom, broadcast } = require("./rooms");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(express.json());

let users = {};

wss.on("connection", (ws, req) => {
    const urlParams = new URLSearchParams(req.url.split("?")[1]);
    const roomId = urlParams.get("room");

    if (!roomId) {
        ws.close();
        return;
    }

    joinRoom(roomId, ws);
    
    ws.on("message", (message) => {
        const data = JSON.parse(message);
        broadcast(roomId, data, ws);
    });

    ws.on("close", () => {
        users[roomId] = users[roomId]?.filter(client => client !== ws);
    });
});

app.post("/create-room", (req, res) => {
    const roomId = createRoom();
    res.json({ roomId });
});

server.listen(4000, () => console.log("Server running on port 4000"));
