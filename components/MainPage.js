import BackgroundImage from "./BackgroundImage";
import Navbar from "./Navbar";
import classes from "./Card.module.scss";
import Location from "../public/assets/icons/location.png";
import Clock from "../public/assets/icons/clock.png";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

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
        <div className="row d-flex justify-content-end flex-equal">
          <div className="text-white col-8 bg-danger d-flex flex-column justify-content-between">
            <Navbar />
            <div className="row d-flex justify-content-evenly align-items-center Screen Index-1 pb-5 ms-5">
              <h1 className="ScreenText">{data.main.temp.toFixed()} °C</h1>
              <div className="Location d-flex flex-row align-items-center">
                <h2 className="fs-1">{data.name}</h2>
                <div className="ms-5">
                  <Image
                    src={Location}
                    alt={"Location Icon"}
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <div className="Time d-flex flex-row align-items-center">
                <h3>{currentTime}</h3>
                <div className="ms-2">
                  <Image src={Clock} alt={"icon"} width={48} height={48} />
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                {data.weather.map((weather) => (
                  <Fragment key={weather.id}>
                    <p className="fs-1">{weather.main}</p>

                    <div className="ms-5">
                      <Image
                        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        alt={"icon"}
                        width={72}
                        height={72}
                      />
                    </div>
                  </Fragment>
                ))}
                {/*  */}
              </div>
            </div>
          </div>
          <div className={`col-4 ${classes.Card}`}>
            <div className="container-fluid">
              <div className="card bg-white">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
