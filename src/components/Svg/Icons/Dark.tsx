import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <path d="M0 0H24V24H0z" transform="translate(-213 -408) translate(213 408)" />
            <path
              fill="#00B8B9"
              fillRule="nonzero"
              d="M12.328 20.055c3.281 0 6.164-1.977 7.227-4.625.093-.227.125-.446.125-.57 0-.32-.227-.532-.5-.532-.157 0-.313.04-.524.133-.562.21-1.5.406-2.422.406-4.047 0-6.617-2.5-6.617-6.515 0-.915.203-2.079.492-2.704.102-.21.141-.382.141-.515 0-.274-.195-.524-.54-.524-.124 0-.327.032-.538.118-2.914 1.171-4.852 4.21-4.852 7.46 0 4.57 3.446 7.868 8.008 7.868z"
              transform="translate(-213 -408) translate(213 408)"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
