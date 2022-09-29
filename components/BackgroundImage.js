import Image from "next/image";
// Image Imports
import Clear from "../public/assets/images/sunny.avif";
import Clouds from "../public/assets/images/cloudy.jpg";
import Night from "../public/assets/images/night.jpg";
import Rain from "../public/assets/images/rainy-day.jpg";
import Thunderstorm from "../public/assets/images/rainy-night.jpg";
import Extreme from "../public/assets/images/snowy-cloudy.jpg";
import Snow from "../public/assets/images/snowy-day.jpg";
import SnowyNight from "../public/assets/images/snowy-night.jpg";
import SunnyDay from "../public/assets/images/sunny.jpg";
import Sunset from "../public/assets/images/sunset.jpg";

// css import
import classes from "./BackgroundImage.module.scss";
import { useEffect, useRef, useState } from "react";

const BackgroundImageComponent = (props) => {
  return (
    <Image
      key={props.WeatherKey}
      //   src={Night}
      // src={DayNight}
      src={props.img}
      // src={`../public/assets/images/${weather.main}.jpg`}
      //   alt={`Background Image of ${weather.main}`}
      alt={`Background Image of ${props.AltOfImage}`}
      // alt={`Background Image of Rain`}
      layout="fill"
      draggable={false}
    />
  );
};

export default function BackgroundImage(props) {
  const { Weather, time } = props;
  const [DayNight, setDayNight] = useState(Night);
  // let condition = `${weather.main}`;
  // let conditionImage;
  // switch (condition) {
  //   case "Rain":
  //     conditionImage = Rain;
  //     break;
  //   case "Cloudy":
  //     conditionImage = Clouds;
  //     break;
  // }
  console.log(conditionImage);
  const ImageArray = [{ Clouds: Clouds }];
  //   const ImageArray = [
  //     Rain, Clouds, Clear, Snow, Extreme, Thunderstorm];
  //   TODO : Add weather background image change

  //   Day night system on background image
  //   let DayTime;
  const DayTime = useRef();
  // useEffect(() => {
  //   //   console.log(time);
  //   const currentTime = Date.now();
  //   DayTime.current = new Date(currentTime);
  //   if (18 > DayTime.current.getHours() && DayTime.current.getHours() > 6) {
  //     setDayNight(Clear);
  //   } else {
  //     setDayNight(Night);
  //   }
  // }, [time]);

  return (
    <>
      <div className={classes.BgImage}>
        {Weather.map((weather) => {
          console.log(weather.main);
          switch (weather.main) {
            case "Rain":
              return (
                <BackgroundImageComponent
                  WeatherKey={weather.main}
                  img={Rain}
                  AltOfImage={weather.main}
                />
              );
            case "Clouds":
              <BackgroundImageComponent
                WeatherKey={weather.main}
                img={Rain}
                AltOfImage={weather.main}
              />;
              break;
            case "Clear":
              return (
                <BackgroundImageComponent
                  WeatherKey={weather.main}
                  img={Clear}
                  AltOfImage={weather.main}
                />
              );
          }
          return BackgroundImageComponent;
        })}
      </div>
    </>
  );
}
// https://openweathermap.org/weather-conditions
