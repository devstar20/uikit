import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="nonzero"
        opacity=".24"
        d="M18.078 18.453c.399-.406.399-1.07.008-1.46l-4.617-4.618 4.617-4.625c.39-.39.398-1.063-.008-1.46-.398-.4-1.07-.4-1.46-.009L12 10.898 7.375 6.281c-.375-.383-1.063-.398-1.46.008-.4.399-.392 1.086-.009 1.461l4.617 4.625-4.617 4.617c-.383.383-.39 1.063.008 1.461.406.399 1.086.39 1.461.016L12 13.844l4.617 4.617c.39.39 1.063.39 1.461-.008z"
        transform="translate(-1013.000000, -400.000000) translate(1013.000000, 400.000000)"
      />
    </Svg>
  );
};

export default Icon;
