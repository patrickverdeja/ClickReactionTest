import { useEffect, useRef } from "react";

export function CanvasSize(props) {
  const {
    setXValue,
    setYValue,
    xValue,
    yValue,
    startDate,
    setTimeTracked,
    timeTracked,
    setTimerCount
  } = props;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
    if (xValue !== null && yValue !== null) {
      ctx.fillRect(xValue, yValue, 12, 12);
    }
  }, [xValue, yValue]);

  function handleMouseClick(e) {
    function compare(expected, actual) {
      if (expected + 12 >= actual && actual >= expected) {
        return true;
      }
    }
    let compareX = compare(xValue, e.nativeEvent.offsetX);
    let compareY = compare(yValue, e.nativeEvent.offsetY);
    if (compareX && compareY) {
      const now = new Date();
      const elapsedTime = (now.getTime() - startDate.getTime()) / 1000;
      const elapsedTimeSeconds = elapsedTime.toFixed(3) + " seconds";
      setTimeTracked([elapsedTime, ...timeTracked]);
      setTimerCount(elapsedTimeSeconds);
    } else {
      setTimerCount("You Missed – Click Reset To Try Again");
      setXValue(null);
      setYValue(null);
    }
  }
  return (
    <div>
      <p>
        <canvas
          ref={canvasRef}
          id="canvas1"
          style={{ border: "1px solid black" }}
          onClick={handleMouseClick}
          width="900px"
          height="350px"
        ></canvas>
      </p>
    </div>
  );
}
