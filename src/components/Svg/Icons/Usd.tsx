import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <defs>
        <path id="7xuvwt26fa" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g transform="translate(-933 -408) translate(933 408)">
            <path d="M0 0H24V24H0z" />
            <mask id="swxyvtplzb" fill="#fff">
              <use href="#7xuvwt26fa" />
            </mask>
            <use fill="#FAFBFC" fillRule="nonzero" href="#7xuvwt26fa" />
            <g mask="url(#swxyvtplzb)">
              <g>
                <path fill="#FAFBFC" d="M0 0H20V2.5H0z" transform="translate(2 2)" />
                <path fill="#B22234" d="M0 2.5H20V5H0z" transform="translate(2 2)" />
                <path fill="#FAFBFC" d="M0 5H20V7.5H0z" transform="translate(2 2)" />
                <path fill="#B22234" d="M0 7.5H20V10H0z" transform="translate(2 2)" />
                <path fill="#FAFBFC" d="M0 10H20V12.5H0z" transform="translate(2 2)" />
                <path fill="#B22234" d="M0 12.5H20V15H0z" transform="translate(2 2)" />
                <path fill="#FAFBFC" d="M0 15H20V17.5H0z" transform="translate(2 2)" />
                <path fill="#B22234" d="M0 17.5H20V20H0z" transform="translate(2 2)" />
              </g>
            </g>
            <g mask="url(#swxyvtplzb)">
              <g>
                <path fill="#3C3B6E" d="M0 0H10V10H0z" transform="translate(2 2)" />
                <path
                  fill="#FAFBFC"
                  fillRule="nonzero"
                  d="M7.973 6.391l.324.997h1.048l-.848.616L8.82 9l-.848-.616L7.125 9l.324-.996-.847-.616h1.047l.324-.997zm-3.047-.018l.324.996h1.048l-.848.616.324.997-.848-.616-.847.616.323-.997-.847-.616h1.047l.324-.996zm-3.047 0l.324.996h1.048l-.848.616.324.997-.848-.616-.847.616.323-.997-.847-.616h1.048l.323-.996zm6.094-2.895l.324.997h1.048l-.848.616.324.996-.848-.616-.848.616.324-.996-.847-.616h1.047l.324-.997zM4.926 3.46l.324.996h1.048l-.848.616.324.997-.848-.616-.847.616.323-.997-.847-.616h1.047l.324-.996zm-3.047 0l.324.996h1.048l-.848.616.324.997-.848-.616-.847.616.323-.997-.847-.616h1.048l.323-.996zM7.973.565l.324.997h1.048l-.848.615.324.997-.848-.616-.848.616.324-.997-.847-.615h1.047l.324-.997zM4.926.547l.324.996h1.048l-.848.616.324.997-.848-.616-.847.616.323-.997-.847-.616h1.047l.324-.996zm-3.047 0l.324.996h1.048l-.848.616.324.997-.848-.616-.847.616.323-.997-.847-.616h1.048l.323-.996z"
                  transform="translate(2 2)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
