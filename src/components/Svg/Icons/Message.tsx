import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="nonzero"
        opacity=".6"
        d="M16.667 4.167c.46 0 .833.373.833.833v10c0 .46-.373.833-.833.833H3.333c-.46 0-.833-.373-.833-.833V5c0-.46.373-.833.833-.833h13.334zm-.834 3.125l-4.333 3.25c-.889.666-2.111.666-3 0l-4.334-3.25v6.875h11.667V7.292zM15 5.833H5l4.5 3.375c.296.223.704.223 1 0L15 5.833z"
        transform="translate(-693.000000, -616.000000) translate(693.000000, 616.000000)"
      />
    </Svg>
  );
};

export default Icon;
