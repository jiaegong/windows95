import React, { useEffect, useRef, useState } from 'react';

function Canvas() {
  // TODO: 그림판 팔레트 추가하기
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>();
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');

      if (context) {
        contextRef.current = context;
        context.strokeStyle = 'black'; // 선 색상
        context.lineWidth = 2; // 선 두께
        context.lineCap = 'round'; // 선 끝 모양
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const context = contextRef.current;

    if (context) {
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;

    const { offsetX, offsetY } = e.nativeEvent;
    const context = contextRef.current;

    if (context) {
      context.lineTo(offsetX, offsetY);
      context.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <canvas
      width={500}
      height={400}
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
    />
  );
}

export default Canvas;
