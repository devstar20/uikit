import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <path
                d="M0 0H24V24H0z"
                transform="translate(-533.000000, -400.000000) translate(533.000000, 400.000000)"
              />
            </g>
            <path
              fill="#50AF95"
              fillRule="nonzero"
              d="M12 2c5.523 0 10 4.477 10 10s-4.478 10-10 10S2 17.524 2 12 6.477 2 12 2"
              transform="translate(-533.000000, -400.000000) translate(533.000000, 400.000000)"
            />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M13.234 10.668V9.18h3.402V6.913H7.373V9.18h3.402v1.486c-2.765.127-4.844.675-4.844 1.331 0 .656 2.08 1.204 4.844 1.331v4.765h2.46v-4.765c2.76-.127 4.835-.675 4.835-1.33s-2.075-1.203-4.835-1.33m0 2.256c-.07.004-.426.025-1.22.025-.635 0-1.081-.018-1.239-.026v.002c-2.443-.108-4.266-.534-4.266-1.043 0-.509 1.824-.934 4.266-1.042v1.661c.16.011.618.038 1.25.038.758 0 1.14-.032 1.21-.038V10.84c2.437.109 4.257.534 4.257 1.042 0 .507-1.82.933-4.258 1.041"
              transform="translate(-533.000000, -400.000000) translate(533.000000, 400.000000)"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
