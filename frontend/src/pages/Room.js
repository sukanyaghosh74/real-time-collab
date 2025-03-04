import React, { useEffect, useState } from "react";
import Canvas from "../components/Canvas";
import Cursor from "../components/Cursor";

const Room = () => {
    const [ws, setWs] = useState(null);

    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:4000?room=${window.location.pathname.split("/").pop()}`);
        setWs(socket);
        return () => socket.close();
    }, []);

    if (!ws) return <p>Loading...</p>;

    return (
        <div>
            <Canvas ws={ws} />
            <Cursor ws={ws} />
        </div>
    );
};

export default Room;
