import classes from "./Card.module.scss";
import SunComponent from "./SunComponent";

export default function WeatherSummary(props) {
  const { data } = props;

  return (
    <>
      <div
        className={`col-4 pe-4 d-flex flex-column justify-content-evenly ${classes.Panel}`}
      >
        <div className={classes.Card}>
          <h5 className="fs-5">Todays Highlight</h5>
          <div className="card bg-white">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <div>{data.main.feels_like}</div>
              <div>{data.main.temp_min}</div>
              <div>{data.main.temp_max}</div>
              <div>{data.main.pressure}</div>
              <div>{data.main.humidity}</div>
              <div>{data.main.sea_level}</div>
              <div>{data.main.grnd_level}</div>
            </div>
          </div>
          <div className="card bg-white">
            <h5 className="card-title">Card title</h5>
            <div className="card-body text-center">
              <SunComponent />
            </div>
          </div>
        </div>
        <div className={classes.Card}>
          <h5 className="fs-1"> 7 day forecast</h5>
          <div className="card bg-white">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <div>{data.main.feels_like}</div>
              <div>{data.main.temp_min}</div>
              <div>{data.main.temp_max}</div>
              <div>{data.main.pressure}</div>
              <div>{data.main.humidity}</div>
              <div>{data.main.sea_level}</div>
              <div>{data.main.grnd_level}</div>
            </div>
          </div>
        </div>

        {/* rüzgar */}

        {/* rüzgar hızı */}
        {/* <div>{data.wind.speed}</div> */}
        {/* rüzgarın açısı */}
        {/* <div>{data.wind.speed}</div> */}
        {/* rüzgarın saatteki şiddeti */}
        <div>{data.wind.gust}</div>
        {/* yağmur yağma olasılığı */}
        {/* <div>{data.rain && data.rain["1h"]}</div> */}
        {/* kar yağma olasılığı */}
        {/* <div>{data.snow && data.snow["1h"]}</div> */}

        {/* <div>{data.sys.country}</div>
          <div>{data.sys.sunrise}</div>
          <div>{data.sys.sunset}</div>
          <div>{data.timezone}</div> */}
      </div>
    </>
  );
}
