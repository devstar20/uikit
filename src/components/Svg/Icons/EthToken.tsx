import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <g
        fillRule="nonzero"
        transform="translate(-605.000000, -616.000000) translate(605.000000, 616.000000) translate(1.666667, 1.666667)"
      >
        <circle cx="8.333" cy="8.333" r="8.333" fill="#464A75" />
        <path
          fill="#FFF"
          d="M8.305 11.235l-3.58-2.114 3.58 5.046 3.582-5.046-3.584 2.114h.002zM8.359 2.5L4.78 8.442l3.58 2.116 3.58-2.114L8.359 2.5z"
        />
      </g>
    </Svg>
  );
};

export default Icon;
