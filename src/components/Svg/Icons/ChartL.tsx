import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="nonzero"
        d="M5 8.333c.46 0 .833.373.833.834V15c0 .46-.373.833-.833.833-.46 0-.833-.373-.833-.833V9.167c0-.46.373-.834.833-.834zm5-4.166c.46 0 .833.373.833.833v10c0 .46-.373.833-.833.833-.46 0-.833-.373-.833-.833V5c0-.46.373-.833.833-.833zm5 6.666c.46 0 .833.373.833.834V15c0 .46-.373.833-.833.833-.46 0-.833-.373-.833-.833v-3.333c0-.46.373-.834.833-.834z"
        opacity=".6"
        transform="translate(-869.000000, -616.000000) translate(869.000000, 616.000000)"
      />
    </Svg>
  );
};

export default Icon;
