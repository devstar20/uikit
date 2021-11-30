import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="nonzero"
        d="M4.286 12.286H2V18h5.714v-2.286H4.286v-3.428zM2 7.714h2.286V4.286h3.428V2H2v5.714zm13.714 8h-3.428V18H18v-5.714h-2.286v3.428zM12.286 2v2.286h3.428v3.428H18V2h-5.714z"
        opacity=".6"
        transform="translate(-825.000000, -616.000000) translate(825.000000, 616.000000)"
      />
    </Svg>
  );
};

export default Icon;
