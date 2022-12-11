import { useState } from "react";
import { countryList } from "./countryList";

export function PlayerData(props) {
  const { setLoggedCountry, setLoggedName } = props;
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [submitDiv, setSubmitDiv] = useState("");

  function handleClearClick() {
    setName("");
    setCountry("-Select Country-");
    setSubmitDiv("");
  }

  function handleNameInput(event) {
    setName(event.target.value);
  }

  function handleCountryInput(event) {
    setCountry(event.target.value);
  }

  function handleSubmit() {
    setLoggedName(name);
    setLoggedCountry(country);
    handleClearClick();
    setSubmitDiv("Submitted!");
  }
  return (
    <div>
      <label>Username:</label>
      <br />
      <input
        type="text"
        id="name"
        value={name}
        name="name"
        onChange={handleNameInput}
      />
      <br />
      <label>Country:</label>
      <br />
      <select
        className="dropDownMenu"
        value={country}
        onChange={handleCountryInput}
      >
        <option value="">-Select Country-</option>
        {countryList.map((element) => (
          <option key={element.code} value={element.code}>
            {element.name}
          </option>
        ))}
      </select>
      <br />
      <br />
      <input type="submit" value="Submit" onClick={handleSubmit} />
      <input type="submit" value="Clear" onClick={handleClearClick} />
      <div className="submitDiv">{submitDiv}</div>
    </div>
  );
}

export function UsernameCountry(props) {
  const { loggedName, loggedCountry } = props;
  if (loggedName.length === 0) {
    return (
      <div className="Errors">Enter Player Information in "User Info" Tab</div>
    );
  } else if (loggedName === " ") {
    return <div className="Errors">Error 448: Username Cannot Be Blank</div>;
  } else {
    if (loggedCountry === "-Select Country-") {
      return (
        <div className="UsernameCountry">
          {loggedName} - No Country Selected
        </div>
      );
    }
    return (
      <div className="UsernameCountry">
        {loggedName} &nbsp;
        <img
          src={`https://flagcdn.com/24x18/${loggedCountry}.png`}
          title="country"
          alt="flag"
        />
      </div>
    );
  }
}
