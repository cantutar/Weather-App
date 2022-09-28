import Image from "next/image";
// Image Imports
import Sunny from "../public/assets/images/sunny.avif";
// import Sunny from "../public/assets/images/sunny.avif";
// import Sunny from "../public/assets/images/sunny.avif";
// import Sunny from "../public/assets/images/sunny.avif";
// import Sunny from "../public/assets/images/sunny.avif";
// import Sunny from "../public/assets/images/sunny.avif";
// import Sunny from "../public/assets/images/sunny.avif";
// import Sunny from "../public/assets/images/sunny.avif";
// import Sunny from "../public/assets/images/sunny.avif";
// import Sunny from "../public/assets/images/sunny.avif";
// import classes from "./BackgroundImage.module.scss";

export default function BackgroundImage(props) {
  return (
    <>
      <div className={classes.BgImage}>
        <Image
          src={Sunny}
          alt={`Background Image of Sunny`}
          layout="fill"
          draggable={false}
        />
      </div>
    </>
  );
}
