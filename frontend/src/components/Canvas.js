import { useEffect, useRef } from "react";
import { fabric } from "fabric";

function Canvas({ socket }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        canvasRef.current = new fabric.Canvas("canvas", { backgroundColor: "white" });

        socket?.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "draw") {
                fabric.util.enlivenObjects([data.object], (objects) => {
                    objects.forEach((obj) => canvasRef.current.add(obj));
                });
            }
        };

        return () => canvasRef.current.dispose();
    }, [socket]);

    return <canvas id="canvas" width={800} height={600}></canvas>;
}

export default Canvas;
