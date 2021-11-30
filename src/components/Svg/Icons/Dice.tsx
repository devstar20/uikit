import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 32" {...props}>
      {/* <path d="M12 6H36V30H12z" transform="translate(-290.000000, -972.000000) translate(290.000000, 972.000000)"/> */}
      <text
        fill="#141029"
        fontFamily="AppleColorEmoji, Apple Color Emoji"
        fontSize="24"
        transform="translate(-290.000000, -972.000000) translate(290.000000, 972.000000)"
      >
        <tspan x="7" y="24">
          🎲
        </tspan>
      </text>
    </Svg>
  );
};

export default Icon;
