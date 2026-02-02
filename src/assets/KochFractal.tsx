import { useRef, useEffect } from "react";

type FractalType = {
  onDone: () => void
}

const Fractal: React.FC<FractalType> = ({ onDone }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(null);

  const moveDistance = 6;
  const endCount = 4096;

  const getParity = (n: number): number => {
    n ^= n >> 16;
    n ^= n >> 8;
    n ^= n >> 4;
    n ^= n >> 2;
    n ^= n >> 1;
    return n & 1;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // DPR setup
    const dpr = window.devicePixelRatio || 1;
    const width = 750;
    const height = 300;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;

    // Animation state
    let pos = { x: 10, y: 250 };
    let count = 0;
    let dir = 120;

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);

    const frame = () => {
      // draw multiple steps per frame (performance win)
      for (let i = 0; i < 32 && count < endCount; i++) {
        if (getParity(count)) {
          dir += 60;
        } else {
          pos.x += moveDistance * Math.cos((dir * Math.PI) / 180);
          pos.y += moveDistance * Math.sin((dir * Math.PI) / 180);
          ctx.lineTo(pos.x, pos.y);
        }
        count++;
      }

      ctx.stroke();

      if (count < endCount) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        onDone();
      }
    };

    rafRef.current = requestAnimationFrame(frame);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Fractal;