import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

const Canvas = ({ ws }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current);
        canvas.isDrawingMode = true;

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "draw") {
                fabric.loadSVGFromString(data.svg, (objects, options) => {
                    const obj = fabric.util.groupSVGElements(objects, options);
                    canvas.add(obj);
                    canvas.renderAll();
                });
            }
        };

        canvas.on("path:created", (event) => {
            const svg = event.path.toSVG();
            ws.send(JSON.stringify({ type: "draw", svg }));
        });

        return () => canvas.dispose();
    }, [ws]);

    return <canvas ref={canvasRef} width={800} height={500} />;
};

export default Canvas;
