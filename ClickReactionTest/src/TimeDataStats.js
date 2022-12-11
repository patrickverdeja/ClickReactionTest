export function TimeData(props) {
  const { timeTracked, setTimeTracked } = props;
  function handleClear() {
    setTimeTracked([]);
  }
  if (timeTracked.length > 0) {
    return (
      <div>
        <h2>Recent Times</h2>
        <button onClick={handleClear}>Clear</button>
        <ol className="TimeData">
          {timeTracked.map((time, index) => (
            <li key={index}>{time.toFixed(3)}</li>
          ))}
        </ol>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Recent Times</h2>
        <div className="noData">
          <h2>No data recorded</h2>
        </div>
      </div>
    );
  }
}

export function TimeStats(props) {
  const { timeTracked } = props;

  let max = undefined;
  if (timeTracked.length > 0) {
    max = timeTracked.reduce(function (a, b) {
      return Math.max(a, b);
    });
  }

  let min = undefined;
  if (timeTracked.length > 0) {
    min = timeTracked.reduce(function (a, b) {
      return Math.min(a, b);
    });
  }

  let avg = undefined;
  let sum = timeTracked.reduce((partialSum, a) => partialSum + a, 0);
  if (timeTracked.length > 0) {
    avg = (sum / timeTracked.length).toFixed(3);
  }

  return (
    <div>
      <h2>Statistics</h2>
      Fastest time: {min}
      <br />
      Slowest Time: {max}
      <br />
      Average Time: {avg}
    </div>
  );
}
