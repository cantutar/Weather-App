import { Fragment, useEffect, useRef } from "react";
import classes from "./Index.module.scss";
import { gsap } from "gsap";

export default function WeatherMain(props) {
  const MainSection = useRef();

  useEffect(() => {
    gsap.to(MainSection.current, {
      opacity: 1,
      translateY: "0",
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  const { data, time } = props;
  return (
    <>
      <div className="col-5 MainSection" ref={MainSection}>
        <div className={`container card ${classes.Card} border-white`}>
          <div className="d-flex justify-content-end">
            <span className="ms-auto">search</span>
          </div>
          <div className="row">
            <div className="card-title">icon</div>
            <span>{data.main.temp.toFixed()} °C</span>
            <span>Apparent air temperature{data.main.feels_like}</span>
            <hr className="HR" />
            <span>{data.name}</span>
            {/*TODO buraya date objesi oluşturulucak */}
            <span>{time}</span>
            <div className="d-flex justify-content-between align-items-center">
              {data.weather.map((weather) => (
                <Fragment key={weather.id}>
                  <div>{weather.main}</div>
                  <div>{weather.description}</div>
                  <div>{weather.icon}</div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
