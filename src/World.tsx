import React from 'react';

type Pen = {
    x: number; y: number; vx: number; vy: number;
}

const mousePosition = { x: 0, y: 0 };
const prevPen: Pen = { x: 0, y: 0, vx: 0, vy: 0 };
const pen: Pen = { x: window.innerWidth / 2, y: window.innerHeight / 2, vx: 0, vy: 0 }
let penDown = false;
let penUpTime = 0;
let lastT = 0;
let time = 0;

let ctx: CanvasRenderingContext2D;

const clear = () => {
    if (ctx) {
        ctx.save();
        ctx.fillStyle = "#333";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.restore();
    }
};

const k = 3;
const damping = 8;
const mass = 20;

const updatePen = (dt: number) => {

    var springForceY = -k * (pen.y - mousePosition.y);
    var springForceX = -k * (pen.x - mousePosition.x);

    var dampingForceY = damping * pen.vy;
    var dampingForceX = damping * pen.vx;

    var forceY = springForceY - dampingForceY;
    var forceX = springForceX - dampingForceX;

    var accelerationY = forceY / mass;
    var accelerationX = forceX / mass;

    prevPen.x = pen.x;
    prevPen.y = pen.y;
    prevPen.vx = pen.vx;
    prevPen.vy = pen.vy;

    pen.vy += accelerationY * dt;
    pen.vx += accelerationX * dt;
    pen.y += pen.vy * dt;
    pen.x += pen.vx * dt;
};

const renderPen = () => {
    if (!ctx) {
        return
    }
    if (penDown) {
        const Z = 0.4;
        const v = Math.sqrt(pen.vx * pen.vx + pen.vy * pen.vy);
        // ctx.clearRect(100,90,300,20);
        // ctx.fillText(`v=${v}`, 100,100);
        ctx.lineWidth = Math.max(3, (60 - v) / 4);
        ctx.beginPath();
        ctx.moveTo(prevPen.x, prevPen.y);
        ctx.bezierCurveTo(
            prevPen.x + prevPen.vx * Z, prevPen.y + prevPen.vy * Z,
            pen.x - pen.vx * Z, pen.y - pen.vy * Z,
            pen.x, pen.y);
        ctx.stroke();
    } else {
        const drip = Math.random() > (time - penUpTime) / 100;
        if (drip) {
            const sr = ctx.lineWidth*2;
            ctx.beginPath();
            for (let Z = 0; Z < 10; Z += 1) {
                ctx.arc(pen.x + Math.random() * sr - sr / 2, pen.y + Math.random() * sr - sr / 2,
                 Math.random() * ctx.lineWidth / 4, 0, 2 * Math.PI, false);
            }
            ctx.fill();
        }
    }
};

const tick = (t: number) => {
    time = t;
    if (lastT > 0) {
        const dt = t - lastT;
        updatePen(dt / 32);
        renderPen();
    }
    lastT = t;
    requestAnimationFrame(tick);
};

const ev_mousemove = (ev: MouseEvent) => {
    mousePosition.x = ev.offsetX;
    mousePosition.y = ev.offsetY;
}

const ev_mousedown = (ev: MouseEvent) => {
    penDown = true;
    prevPen.x = pen.x = mousePosition.x = ev.offsetX;
    prevPen.y = pen.y = mousePosition.y = ev.offsetY;
    prevPen.vx = prevPen.vy = pen.vx = pen.vy = 0;
}

const ev_mouseup = (ev: MouseEvent) => {
    penDown = false;
    penUpTime = time;
}

requestAnimationFrame(tick);

const World: React.FC = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.addEventListener('mousemove', ev_mousemove, false);
            canvas.addEventListener('mousedown', ev_mousedown, false);
            canvas.addEventListener('mouseup', ev_mouseup, false);
            canvas.addEventListener('dblclick', clear, false);
            ctx = canvas.getContext('2d')!;
            ctx.lineCap = "round";
            clear();

            ctx.strokeStyle = "#f00";
            ctx.lineWidth = 1;
            ctx.fillStyle = "#f22";
        }
    }, [canvasRef])

    return (
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
        />);
}

export default World;