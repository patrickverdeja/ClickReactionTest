export function Header() {
  return (
    <div>
      <h1>
        <div className="heading">
          Click Reaction Speed Test{" "}
          <img src="../images/gameLogo.png" alt="test" width="100" />
        </div>
      </h1>
    </div>
  );
}

export function Rules() {
  return (
    <div className="rules">
      <h4>Rules:</h4>
      Click the <b>start</b> button to begin countdown.
      <br />
      When timer hits 0, click the target that appears.
      <br />
      Timer will continue until target is clicked.
      <br />
      After clicking target, reset game to play again.
    </div>
  );
}
