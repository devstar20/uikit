import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 22 17" {...props}>
      <text transform="translate(-174.000000, -982.000000)">
        <tspan x="173.5" y="996">
          💳
        </tspan>
      </text>
    </Svg>
  );
};

export default Icon;
