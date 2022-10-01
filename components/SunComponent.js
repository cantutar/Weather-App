import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import SunIcon from "./SunIcon";
import { MotionPathPlugin } from "../node_modules/gsap/MotionPathPlugin";

export default function SunComponent(props) {
  const Svg = useRef();
  const Sun = useRef();
  const Path = useRef();
  gsap.registerPlugin(MotionPathPlugin);
  useEffect(() => {
    gsap
      .timeline()
      .to(Svg.current, {
        duration: 1,
        opacity: 1,
        ease: "power2.inOut",
      })
      .to(Sun.current, {
        duration: 7,
        motionPath: [
          { x: 0, y: -20 },
          { x: 60, y: -80 },
          { x: 120, y: -100 },
          { x: 180, y: -80 },
          { x: 240, y: 0 },
        ],
        delay: +1,
        ease: "power4.inOut",
      });
  }, []);

  return (
    <>
      <>
        <svg
          width={250}
          height={122}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
          ref={Svg}
          className="SunSvg"
        >
          <g clipPath="url(#prefix__clip0_30_6)">
            <path
              stroke="#000"
              strokeWidth={7}
              strokeLinecap="round"
              d="M3.5 118.5h243"
            />
            <ellipse
              cx={125}
              cy={140}
              rx={125}
              ry={121}
              stroke="#000"
              strokeLinejoin="round"
              strokeDasharray="2 2"
            />
            <ellipse
              cx={8}
              cy={112.5}
              rx={12}
              ry={11.5}
              fill="#FFC62D"
              ref={Sun}
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_30_6">
              <path fill="#fff" d="M0 0h250v122H0z" />
            </clipPath>
          </defs>
        </svg>
      </>
    </>
  );
}
