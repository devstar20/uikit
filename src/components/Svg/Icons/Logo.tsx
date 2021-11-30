import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <defs>
        <linearGradient id="5sf8esoi9w" x1="89.286%" x2="1.791%" y1="49.997%" y2="49.997%">
          <stop offset="0%" stopColor="#3F81EF" />
          <stop offset="100%" stopColor="#03F9AE" />
        </linearGradient>
        <linearGradient id="2wffji39l4" x1="75.888%" x2="-11.606%" y1="50.003%" y2="50.003%">
          <stop offset="0%" stopColor="#3F81EF" />
          <stop offset="100%" stopColor="#9547F5" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <path
              fill="url(#5sf8esoi9w)"
              d="M25.288 0c3.604 0 6.524 2.938 6.524 6.562v9.848c0 3.625-2.92 6.566-6.524 6.566H9.382v-4.924h15.906c.901 0 1.63-.736 1.63-1.642V6.562c0-.906-.729-1.638-1.63-1.638h-9.79c-.9 0-1.632.732-1.632 1.638v6.566H8.971V6.562C8.971 2.938 11.895 0 15.5 0h9.79z"
              transform="translate(-16.000000, -8.000000) translate(16.000000, 8.000000)"
            />
            <path
              fill="url(#2wffji39l4)"
              d="M17.946 25.438v-2.462h4.895v2.462c0 3.624-2.924 6.562-6.528 6.562H6.524C2.92 32 0 29.062 0 25.438V15.59c0-3.625 2.92-6.566 6.524-6.566H22.43v4.924H6.524c-.901 0-1.63.736-1.63 1.642v9.848c0 .906.729 1.638 1.63 1.638h9.79c.9 0 1.632-.732 1.632-1.638z"
              transform="translate(-16.000000, -8.000000) translate(16.000000, 8.000000)"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
