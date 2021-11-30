import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="nonzero"
        opacity=".6"
        d="M9.956 17.42c.649 0 1.018-.595 1.333-1.272l5.14-11.17c.157-.334.246-.642.246-.909 0-.574-.444-1.011-1.011-1.011-.267 0-.575.088-.916.246L3.584 8.437c-.656.301-1.278.677-1.278 1.334 0 .765.718 1.045 1.64 1.045l4.806.014c.11 0 .15.041.15.15l.015 4.806c0 .896.266 1.634 1.039 1.634zm.341-2.707l.035-4.6c0-.507-.206-.718-.725-.712l-4.594.028c-.061 0-.082-.075-.007-.11l9.755-4.457c.103-.048.15.014.11.11l-4.464 9.755c-.034.068-.11.054-.11-.014z"
        transform="translate(-165.000000, -552.000000) translate(165.000000, 552.000000)"
      />
    </Svg>
  );
};

export default Icon;
