export default function WeatherSummary(props) {
  const { data } = props;

  return (
    <>
      <div className="col-7">
        <div className="card bg-transparent border-white">
          <div>{data.main.feels_like}</div>
          <div>{data.main.temp_min}</div>
          <div>{data.main.temp_max}</div>
          <div>{data.main.pressure}</div>
          <div>{data.main.humidity}</div>
          <div>{data.main.sea_level}</div>
          <div>{data.main.grnd_level}</div>
        </div>
      </div>
      {/* rüzgar */}

      {/* rüzgar hızı */}
      <div>{data.wind.speed}</div>
      {/* rüzgarın açısı */}
      <div>{data.wind.speed}</div>
      {/* rüzgarın saatteki şiddeti */}
      <div>{data.wind.gust}</div>
      {/* yağmur yağma olasılığı */}
      <div>{data.rain && data.rain["1h"]}</div>
      {/* kar yağma olasılığı */}
      <div>{data.snow && data.snow["1h"]}</div>

      <div>{data.sys.country}</div>
      <div>{data.sys.sunrise}</div>
      <div>{data.sys.sunset}</div>
      <div>{data.timezone}</div>
      <div>{data.name}</div>
    </>
  );
}
