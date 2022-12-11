import { useState, useEffect } from "react";

export function RestCall() {
  const [fact, setFact] = useState("");
  const [author, setAuthor] = useState("");
  const [buttonClick, setButtonClick] = useState(0);

  function handleButtonClick() {
    setButtonClick(buttonClick + 1);
  }

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setFact(result.content);
        setAuthor(result.author);
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  }, [buttonClick]);

  return (
    <div className="restCallStyle">
      <h4 className="needInspo">Need Inspiration?</h4>
      <p>"{fact}"</p>
      <p>– {author}</p>
      <button className="quoteButton" onClick={handleButtonClick}>
        New Random Quote
      </button>
    </div>
  );
}
