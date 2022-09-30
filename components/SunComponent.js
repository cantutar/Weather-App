import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function SunComponent(props) {
  const Svg = useRef();
  const Sun = useRef();
  useEffect(() => {
    gsap
      .timeline()
      .to(Svg.current, {
        duration: 1,
        opacity: 1,
        ease: "power2.inOut",
      })
      .to(Sun.current, {
        duration: 1.5,
        y: -100,
        delay: +1,
        ease: "power4.inOut",
      });
  }, []);

  return (
    <>
      <div>
        <svg
          width={250}
          height={250}
          viewBox={`0 0 ${431} ${314}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          clipPath="polygon(0 0, 100% 0, 100% 70%, 0 70%)"
          ref={Svg}
          className="SunSvg"
        >
          <g id="27a224a5713514926eb784e8b62038fd">
            <g id="4bed126ea2be696543a1eead2d38c563">
              <ellipse
                cx="214.5"
                cy="242.5"
                ry="71.5"
                fill="#FFC62D"
                ref={Sun}
              />
              <line
                id="9e0e9d99b7fcbb61ffac6db16875ee7a"
                x1="25.5"
                y1="239.5"
                x2="404.521"
                y2="239.5"
                stroke="#000"
                strokeWidth={7}
                strokeLinecap="round"
                d="M25.5 239.5h379.021"
              />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}
