import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Location from "../public/assets/icons/location.png";
import Clock from "../public/assets/icons/clock.png";

export default function WeatherMain(props) {
  const { data, time } = props;
  const MainSection = useRef();

  useEffect(() => {
    gsap.to(MainSection.current, {
      opacity: 1,
      translateY: "0",
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  return (
    <>
      <div
        ref={MainSection}
        className="MainSection row d-flex justify-content-evenly align-items-center Screen pb-md-5 ms-md-5 ms-1"
      >
        <h1 className="ScreenText">{data.main.temp.toFixed()} °C</h1>
        <div className="Location d-flex flex-row align-items-center">
          <h2 className="fs-1">{data.name}</h2>
          <div className="ms-md-5">
            <Image
              src={Location}
              alt={"Location Icon"}
              width={48}
              height={48}
              draggable={false}
            />
          </div>
        </div>
        <div className="Time d-flex flex-row align-items-center">
          <h3>{time}</h3>
          <div className="ms-md-2">
            <Image
              src={Clock}
              alt={"icon"}
              width={48}
              height={48}
              draggable={false}
            />
          </div>
        </div>
        <div className="d-flex flex-row align-items-center">
          {data.weather.map((weather) => (
            <Fragment key={weather.id}>
              <p className="fs-1">{weather.main}</p>
              <div className="ms-md-5">
                <Image
                  src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={"icon"}
                  width={72}
                  height={72}
                  draggable={false}
                />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
