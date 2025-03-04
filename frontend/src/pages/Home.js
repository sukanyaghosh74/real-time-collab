import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();

    const createRoom = async () => {
        const res = await fetch("http://localhost:4000/create-room", { method: "POST" });
        const { roomId } = await res.json();
        navigate(`/room/${roomId}`);
    };

    return (
        <div>
            <button onClick={createRoom}>Create Room</button>
            <input value={roomId} onChange={(e) => setRoomId(e.target.value)} />
            <button onClick={() => navigate(`/room/${roomId}`)}>Join Room</button>
        </div>
    );
};

export default Home;
