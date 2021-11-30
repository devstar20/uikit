import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 22 22" {...props}>
      <text transform="translate(-366.000000, -979.000000)">
        <tspan x="365.5" y="996">
          🍀
        </tspan>
      </text>
    </Svg>
  );
};

export default Icon;
