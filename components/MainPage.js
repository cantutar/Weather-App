import BackgroundImage from "./BackgroundImage";
import Navbar from "./Navbar";
import { useEffect, useRef, useState } from "react";
import WeatherMain from "./weatherMain";
import WeatherSummary from "./WeatherSummary";

export default function MainPage(props) {
  const { data, fourDayData } = props;
  const [currentTime, setCurrentTime] = useState(null);
  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, [currentTime]);
  return (
    <div>
      <BackgroundImage Weather={data.weather} />
      <>
        <div className="d-flex justify-content-end flex-equal Index-1">
          <div className="me-auto text-white col-6 col-md-8 bg-danger d-flex flex-column justify-content-between">
            <Navbar />
            <WeatherMain data={data} time={currentTime} />
          </div>
          <div className="col-4 col-md-4">
            <WeatherSummary data={data} fourDayData={fourDayData} />
          </div>
        </div>
      </>
    </div>
  );
}
