import React from 'react';

const World: React.FC = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);


    var started = false;
    function ev_mousemove(ev: MouseEvent) {
        var x, y;
        x = ev.offsetX;
        y = ev.offsetY;
        const context = canvasRef.current!.getContext('2d')!;
        if (!started) {
            context.beginPath();
            context.moveTo(x, y);
            started = true;
        } else {
            context.lineTo(x, y);
            context.stroke();
        }
    }

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {

            canvas.addEventListener('mousemove', ev_mousemove, false);
            const ctx = canvas.getContext('2d')!;
            ctx.fillStyle = "#333";
            ctx.strokeStyle = "red";
            ctx.lineWidth = 4;
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        }
    })

    return (
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
        />);
}

export default World;