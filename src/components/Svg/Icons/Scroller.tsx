import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="nonzero"
        d="M6.175 7.158l1.183 1.175L10 5.692l2.642 2.641 1.175-1.175L10 3.333 6.175 7.158zm7.65 5.684l-1.183-1.175L10 14.308l-2.642-2.641-1.183 1.175L10 16.667l3.825-3.825z"
        opacity=".4"
        transform="translate(-913.000000, -616.000000) translate(913.000000, 616.000000)"
      />
    </Svg>
  );
};

export default Icon;
