import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const Title = useRef();
  const NavbarButton = useRef();

  useEffect(() => {
    gsap.timeline().to(Title.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <div className="container mt-5 ms-auto NavbarTitle">
        <h1 ref={Title} className="fs-5">
          the.WeatherApp
        </h1>
      </div>
    </>
  );
}
