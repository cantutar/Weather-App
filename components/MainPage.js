import BackgroundImage from "./BackgroundImage";
import Navbar from "./Navbar";
import { useEffect, useRef, useState } from "react";
import WeatherMain from "./weatherMain";
import WeatherSummary from "./WeatherSummary";

export default function MainPage(props) {
  const { data, time } = props;
  const [currentTime, setCurrentTime] = useState(null);
  useEffect(() => {
    // const current = Date.now();
    setCurrentTime(new Date().toLocaleTimeString());
  }, [currentTime]);
  return (
    <div>
      <BackgroundImage Weather={data.weather} />
      <>
        <div className="row d-flex justify-content-end flex-equal Index-1">
          <div className="text-white col-8 bg-danger d-flex flex-column justify-content-between">
            <Navbar />
            <WeatherMain data={data} time={currentTime} />
          </div>
          <WeatherSummary data={data} />
        </div>
      </>
    </div>
  );
}
