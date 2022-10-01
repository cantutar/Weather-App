import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Navbar(props) {
  const Title = useRef();

  useEffect(() => {
    gsap.timeline().to(Title.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <div className={`container mt-5 ms-auto NavbarTitle`}>
        <Link href={"/"}>
          <h1 ref={Title} className="fs-5">
            the.WeatherApp
          </h1>
        </Link>
      </div>
    </>
  );
}
