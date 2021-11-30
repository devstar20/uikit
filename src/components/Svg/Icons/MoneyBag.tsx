import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 18 24" {...props}>
      <text transform="translate(-625.000000, -979.000000)">
        <tspan x="625" y="996">
          💰
        </tspan>
      </text>
    </Svg>
  );
};

export default Icon;
