import Image from "next/image";
// Image Imports
import Clear from "../public/assets/images/clear-sky-day.jpg";
import Clouds from "../public/assets/images/cloudy.jpg";
import CloudsNight from "../public/assets/images/cloudy-night.jpg";
import Night from "../public/assets/images/night.jpg";
import Rain from "../public/assets/images/rainy-day.jpg";
import RainNight from "../public/assets/images/rainy-night.jpg";
import Thunderstorm from "../public/assets/images/thunderstorm.jpg";
import Snow from "../public/assets/images/snowy-day.jpg";
import SnowyNight from "../public/assets/images/snowy-night.jpg";
import Drizzle from "../public/assets/images/drizzle.jpg";

// css import
import classes from "./BackgroundImage.module.scss";
import { useEffect, useRef, useState } from "react";

const BackgroundImageComponent = (props) => {
  return (
    <Image
      src={props.img}
      alt={`Background Image of ${props.AltOfImage}`}
      layout="fill"
      priority={true}
      draggable={false}
    />
  );
};

export default function BackgroundImage(props) {
  const { Weather, time } = props;
  const [DayNight, setDayNight] = useState("Day");

  //   Day night system on background image
  const DayTime = useRef();
  useEffect(() => {
    const currentTime = Date.now();
    DayTime.current = new Date(currentTime);
    if (18 > DayTime.current.getHours() && DayTime.current.getHours() > 6) {
      setDayNight("Day");
    } else {
      setDayNight("Night");
    }
  }, [time]);

  const WeatherImages = {
    Thunderstorm: Thunderstorm,
    Drizzle: DayNight !== "Night" ? Drizzle : RainNight,
    Rain: DayNight !== "Night" ? Rain : RainNight,
    Snow: DayNight !== "Night" ? Snow : SnowyNight,
    Atmosphere: Rain,
    Clear: DayNight !== "Night" ? Clear : Night,
    Clouds: DayNight !== "Night" ? Clouds : CloudsNight,
  };
  return (
    <>
      <div className={classes.BgImage}>
        {Weather.map(
          ({ main }) =>
            main && (
              <BackgroundImageComponent
                key={main}
                AltOfImage={main}
                img={WeatherImages[main]}
              />
            )
        )}
      </div>
    </>
  );
}
// https://openweathermap.org/weather-conditions
