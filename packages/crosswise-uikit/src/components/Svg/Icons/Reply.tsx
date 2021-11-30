import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="nonzero"
        opacity=".6"
        d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"
        transform="translate(-965.000000, -400.000000) translate(977.000000, 412.000000) scale(-1, 1) translate(-977.000000, -412.000000) translate(965.000000, 400.000000)"
      />
    </Svg>
  );
};

export default Icon;
