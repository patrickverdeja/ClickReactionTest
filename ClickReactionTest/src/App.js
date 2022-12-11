import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import "./styles.css";
import { countryNames } from "./countryData.js";
import { Header, Rules } from "./Body.js";
import { PlayerData, UsernameCountry } from "./PlayerCountryControls.js";
import { TimerControls, CountdownTimer } from "./TimerControls.js";
import { CanvasSize } from "./CanvasControls.js";
import { TimeData, TimeStats } from "./TimeDataStats.js";
import { GraphCanvas } from "./Graph.js";
import { RestCall } from "./RESTCall.js";

export default function App() {
  const [timerCount, setTimerCount] = useState(3);
  const [loggedName, setLoggedName] = useState("");
  const [loggedCountry, setLoggedCountry] = useState("");
  const [xValue, setXValue] = useState(null);
  const [yValue, setYValue] = useState(null);
  const [startDate, setStartDate] = useState();
  const [timeTracked, setTimeTracked] = useState([]);

  return (
    <div className="App">
      <Header />
      <Tabs>
        <TabList>
          <Tab>Home</Tab>
          <Tab>User Info</Tab>
          <Tab>Time Data</Tab>
          <Tab>Time Stats</Tab>
        </TabList>

        <TabPanel>
          <UsernameCountry
            loggedName={loggedName}
            loggedCountry={loggedCountry}
          />
        </TabPanel>

        <TabPanel>
          <PlayerData
            countries={countryNames}
            setLoggedCountry={setLoggedCountry}
            setLoggedName={setLoggedName}
          />
        </TabPanel>

        <TabPanel>
          <div className="floatContainer">
            <div className="floatChild">
              <div className="recentTimes">
                <TimeData
                  timeTracked={timeTracked}
                  setTimeTracked={setTimeTracked}
                />
              </div>
            </div>
            <div className="floatChild">
              <div className="timeGraph">
                <GraphCanvas timeTracked={timeTracked} />
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <TimeStats timeTracked={timeTracked} />
        </TabPanel>
      </Tabs>
      <Rules />
      <TimerControls
        setTimerCount={setTimerCount}
        timerCount={timerCount}
        setXValue={setXValue}
        setYValue={setYValue}
        xValue={xValue}
        yValue={yValue}
        setStartDate={setStartDate}
      />
      <CountdownTimer timerCount={timerCount} />
      <CanvasSize
        setXValue={setXValue}
        setYValue={setYValue}
        xValue={xValue}
        yValue={yValue}
        startDate={startDate}
        timeTracked={timeTracked}
        setTimeTracked={setTimeTracked}
        setTimerCount={setTimerCount}
      />
      <RestCall />
    </div>
  );
}
