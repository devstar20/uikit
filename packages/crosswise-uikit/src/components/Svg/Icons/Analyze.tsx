import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        opacity=".6"
        fillRule="nonzero"
        d="M13.297 20.406l1.812-8.593.313 1.57c.086.437.351.656.805.656h3.046c.407 0 .727-.312.727-.703 0-.422-.313-.727-.727-.727h-2.656l-.86-3.859c-.163-.703-1.226-.695-1.382.031l-1.781 7.953-1.906-11.656c-.118-.719-1.172-.734-1.336-.008l-1.625 7.54h-3c-.407 0-.727.32-.727.726 0 .39.32.703.727.703h3.476c.43 0 .703-.195.79-.586l1-4.57 1.905 11.523c.125.735 1.25.735 1.399 0z"
        transform="translate(-261.000000, -456.000000) translate(261.000000, 456.000000)"
      />
    </Svg>
  );
};

export default Icon;
