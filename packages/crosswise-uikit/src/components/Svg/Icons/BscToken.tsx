import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <path d="M0 0H24V24H0z" transform="translate(-485.000000, -400.000000) translate(485.000000, 400.000000)" />
            <path
              fill="#F3BA2F"
              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2.72 11.116L12 15.836 9.28 13.117l-1.584 1.58L12 19l4.302-4.302v-.001l-1.582-1.581zM12 10.394l-1.187 1.186-.417.418-.002.002.002.002L12 13.606l1.605-1.605v-.002L12 10.394zm5.418.025L15.836 12l1.582 1.582L19 12l-1.582-1.582zm-10.836-.001L5 12l1.582 1.582L8.164 12l-1.582-1.582zM12 5L7.7 9.3l1.581 1.583L12 8.164l2.72 2.72 1.582-1.582L12 5z"
              transform="translate(-485.000000, -400.000000) translate(485.000000, 400.000000)"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
