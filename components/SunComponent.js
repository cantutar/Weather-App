import { forwardRef, useEffect, useRef } from "react";

function SunComponent(props, ref) {
  const { Svg, Sun } = ref;
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
export default forwardRef(SunComponent);
