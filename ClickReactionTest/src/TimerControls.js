import { useState } from "react";

export function TimerControls(props) {
  const {
    timerCount,
    setTimerCount,
    setXValue,
    setYValue,
    setStartDate
  } = props;
  const [randomChecked, setRandomChecked] = useState(false);
  const [countDownID, setCountDownID] = useState();

  function startGame() {
    let newTime = timerCount;
    let countdown = setInterval(() => {
      if (newTime > 1) {
        newTime = newTime - 1;
        setTimerCount(newTime);
      } else {
        clearInterval(countdown);
        setTimerCount("Go!");
        setStartDate(new Date());
        createTarget();
      }
    }, 1000);
    setCountDownID(countdown);
  }

  function createTarget() {
    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let x = getRandomInteger(0, 888);
    let y = getRandomInteger(0, 338);
    setXValue(x);
    setYValue(y);
    console.log(x, y);
  }

  function resetTimer() {
    console.clear();
    clearInterval(countDownID);
    if (!randomChecked) {
      setTimerCount(3);
    } else {
      setTimerCount(Math.floor(Math.random() * (8 - 2) + 2));
    }
    setXValue(null);
    setYValue(null);
  }

  function determineChecked(event) {
    setRandomChecked(event.target.checked);
  }
  return (
    <div>
      <div className="buttons">
        <button
          className="startButton"
          onClick={() => {
            startGame();
          }}
        >
          Start Game
        </button>
        &nbsp;
        <button className="resetButton" onClick={resetTimer}>
          Reset
        </button>
      </div>
      <br />
      <label htmlFor="randomCountdown">
        Random Countdown?
        <input
          id="randomCountdown"
          type="checkbox"
          onChange={determineChecked}
        ></input>
      </label>
    </div>
  );
}

export function CountdownTimer(props) {
  const { timerCount } = props;
  return <div className="timerNums">{timerCount}</div>;
}
