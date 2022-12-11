import { useEffect, useRef } from "react";

export function GraphCanvas(props) {
  const { timeTracked } = props;

  const canvasRef = useRef(null);

  function drawLines(ctx) {
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(400, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(400, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(400, 300);
    ctx.stroke();

    ctx.font = "15px serif";
    ctx.fillStyle = "black";
    ctx.fillText("2", 3, 15);

    ctx.font = "15px serif";
    ctx.fillStyle = "black";
    ctx.fillText("1.5", 3, 95);

    ctx.font = "15px serif";
    ctx.fillStyle = "black";
    ctx.fillText("1", 3, 195);

    ctx.font = "15px serif";
    ctx.fillStyle = "black";
    ctx.fillText("0.5", 3, 295);

    ctx.font = "15px serif";
    ctx.fillStyle = "black";
    ctx.fillText("0", 3, 395);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas.getBoundingClientRect();
    const xInterval = width / 5;
    ctx.clearRect(0, 0, width, height);
    let recentTimes = timeTracked.slice(0, 5);
    let flippedArray = recentTimes.reverse();
    drawLines(ctx);
    flippedArray.forEach((time, index) => {
      let xValue = xInterval * (index + 0.5);
      let yValue = height - time * (height / 2);
      let color;
      if (time >= 1) {
        color = "red";
      } else {
        color = "green";
      }

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(xValue, yValue, 5, 0, 2 * Math.PI);
      ctx.fill();
    });
  }, [timeTracked]);

  return (
    <div>
      <h3>Recent Scores*</h3>
      <p className="italic">*Will display if score is faster than 2 seconds*</p>
      <p>(Red if greater than 1 second, Green if less than 1 second)</p>
      <p>
        <canvas
          ref={canvasRef}
          id="canvas2"
          style={{ border: "1px solid black" }}
          width="400"
          height="400"
        ></canvas>
      </p>
    </div>
  );
}
