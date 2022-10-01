import { useEffect, useState } from "react";
import classes from "./Card.module.scss";
import SunComponent from "./SunComponent";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BiDownArrow } from "react-icons/bi";
import { TbTemperatureCelsius } from "react-icons/tb";

export default function WeatherSummary(props) {
  const { data } = props;
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  useEffect(() => {
    setSunrise(new Date(data.sys.sunrise * 1000).toLocaleTimeString());
    setSunset(new Date(data.sys.sunset * 1000).toLocaleTimeString());
  }, [data.sys.sunrise, data.sys.sunset]);

  return (
    <>
      <div
        className={`pe-lg-4 d-flex flex-column justify-content-around ${classes.Panel} row`}
      >
        <div className="card bg-transparent border-0">
          <h5 className="fs-5 text-center">Todays Highlight</h5>
          <div className="card-body text-center">
            <div>
              <span>
                Feels Like <TbTemperatureCelsius />
              </span>
              <br />
              <span>{data.main.feels_like}</span>
            </div>
            <hr />
            <div>
              <span>
                Today&apos;s Min temp <FaTemperatureLow />
              </span>
              <br />
              <span>{data.main.temp_min}</span>
            </div>
            <hr />
            <div>
              <span>
                Today&apos;s Max temp <FaTemperatureHigh />
              </span>
              <br />
              <span>{data.main.temp_max}</span>
            </div>
            <hr />
            <div>
              <span>
                Pressure <BiDownArrow />
              </span>
              <br />
              <span>{data.main.pressure}</span>
            </div>
            <hr />
            <div>
              <span>
                Humidity <WiHumidity />
              </span>
              <br />
              <span>{data.main.humidity}%</span>
            </div>
            <hr />
            <div className="row">
              <div className="d-flex justify-content-between align-items-center">
                {/* rüzgar hızı */}
                <div>
                  <span>Wind Speed</span>
                  <br />
                  <span>{data.wind.speed}</span>
                </div>
                {/* rüzgarın açısı */}
                <div>
                  <span>Winds degree</span>
                  <br />
                  <span>{data.wind.deg}</span>
                </div>
                {/* rüzgarın saatteki şiddeti */}
                {data.wind.gust && (
                  <div className="d-none d-md-block">
                    <span>Winds gust</span>
                    <br />
                    {data.wind.gust}
                  </div>
                )}
                {/* yağmur yağma olasılığı */}
                {data.rain && (
                  <div>
                    <span>Rain posibility in 1h</span>
                    <br />
                    <span>{data.rain["1h"]}</span>
                  </div>
                )}
                {/* kar yağma olasılığı */}
                {data.snow && (
                  <div>
                    <span>Rain posibility in 1h</span>
                    <br />
                    <span>{data.snow["1h"]}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-transparent border-0 mt-2 rounded d-none d-md-block">
          <h5 className="fs-5 mt-3 text-center">Sunrise & Sunset</h5>
          <hr />
          <div className="text-center">
            <SunComponent />
            <div className="d-flex justify-content-between">
              <div>
                <span>Sunrise</span>
                <br />
                <span>{sunrise}</span>
              </div>
              <div>
                <span>Sunset</span>
                <br />
                <span>{sunset}</span>
              </div>
            </div>
          </div>
        </div>
        {/* I was gonna add this but api level doesnt supports the free tier */}
        {/* <div className="d-none d-md-block card bg-transparent border-0 text-center">
          <h5 className="fs-5">7 day forecast</h5>
          <hr />
          <div className="card-body">
            <div className="row">
              <div className="col-3">
                <span>Mon</span>
              </div>
              <div className="col-3">
                <span>Mon</span>
              </div>
              <div className="col-3">
                <span>Mon</span>
              </div>
              <div className="col-3">
                <span>Mon</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
