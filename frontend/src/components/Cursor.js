import React, { useEffect, useState } from "react";

const Cursor = ({ ws }) => {
    const [cursors, setCursors] = useState({});

    useEffect(() => {
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "cursor") {
                setCursors((prev) => ({ ...prev, [data.id]: data }));
            }
        };
    }, [ws]);

    useEffect(() => {
        const sendCursorPosition = (e) => {
            ws.send(JSON.stringify({ type: "cursor", x: e.clientX, y: e.clientY, id: ws.id }));
        };

        document.addEventListener("mousemove", sendCursorPosition);
        return () => document.removeEventListener("mousemove", sendCursorPosition);
    }, [ws]);

    return (
        <>
            {Object.values(cursors).map((cursor) => (
                <div key={cursor.id} style={{
                    position: "absolute",
                    left: cursor.x,
                    top: cursor.y,
                    backgroundColor: "red",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                }} />
            ))}
        </>
    );
};

export default Cursor;
