import styled from "styled-components";
import { scales, CrosswiseToggleProps, HandleProps, InputProps, ScaleKeys } from "./types";

const scaleKeyValues = {
  sm: {
    crosswiseSize: "16px", // The size of a crosswise (the handle)
    travelDistance: "16px", // How far crosswises should travel horizontally
    toggleHeight: "20px", // General Height and
    toggleWidth: "36px", // Width of a toggle box
    crosswiseThickness: "1px", // Bottom shadow of a crosswise
    crosswiseTwoOffset: "0px", // Crosswises don't look good when they are concentric
    crosswiseThreeOffset: "-3px", // so crosswise 2 and 3 are shifted a little bit
    butterTop: "3px", // Fine adjustments for butter position
    butterLeft: "10px",
    butterWidth: "6px", // Widht and
    butterHeight: "5px", // Height of a butter block on top of crosswises
    butterThickness: "0.5px", // Shadow on the bottom of the butter block
    butterRadius: "2px", // Rounded corners for the butter
    butterSmearOneTop: "10px", // There is melted butter
    butterSmearOneLeft: "2.5px", // next to the butter block
    butterSmearTwoTop: "11px", // implemented with :before and :after
    butterSmearTwoRight: "2.5px", // these values adjust the position of it
  },
  md: {
    crosswiseSize: "32px",
    travelDistance: "34px",
    toggleHeight: "40px",
    toggleWidth: "72px",
    crosswiseThickness: "2px",
    crosswiseTwoOffset: "-3px",
    crosswiseThreeOffset: "-8px",
    butterTop: "3px",
    butterLeft: "16px",
    butterWidth: "12px",
    butterHeight: "11px",
    butterThickness: "1px",
    butterRadius: "4px",
    butterSmearOneTop: "20px",
    butterSmearOneLeft: "5px",
    butterSmearTwoTop: "22px",
    butterSmearTwoRight: "5px",
  },
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.MD }: CrosswiseToggleProps) => {
    return scaleKeyValues[scale][property];
  };

export const CrosswiseStack = styled.div<HandleProps>`
  position: relative;
  display: inline-block;

  &:label:before {
    content: none;
  }

  .crosswises {
    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .crosswise {
    background: #e27c31;
    border-radius: 50%;
    width: ${getScale("crosswiseSize")};
    height: ${getScale("crosswiseSize")};
    position: absolute;
    transition: 0.4s ease;
    top: 2px;
    left: 4px;
    box-shadow: 0 ${getScale("crosswiseThickness")} 0 ${getScale("crosswiseThickness")} #fbbe7c;
  }

  .crosswise:nth-child(1) {
    background: ${({ theme }) => theme.crosswiseToggle.handleBackground};
    box-shadow: 0 ${getScale("crosswiseThickness")} 0 ${getScale("crosswiseThickness")}
      ${({ theme }) => theme.crosswiseToggle.handleShadow};
  }

  .crosswise:nth-child(2) {
    left: 0;
    top: ${getScale("crosswiseTwoOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .crosswise:nth-child(3) {
    top: ${getScale("crosswiseThreeOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .crosswise:nth-child(3):before,
  .crosswise:nth-child(3):after {
    content: "";
    position: absolute;
    background: #ef8927;
    border-radius: 20px;
    width: 50%;
    height: 20%;
  }

  .crosswise:nth-child(3):before {
    top: ${getScale("butterSmearOneTop")};
    left: ${getScale("butterSmearOneLeft")};
  }

  .crosswise:nth-child(3):after {
    top: ${getScale("butterSmearTwoTop")};
    right: ${getScale("butterSmearTwoRight")};
  }

  .butter {
    width: ${getScale("butterWidth")};
    height: ${getScale("butterHeight")};
    background: #fbdb60;
    top: ${getScale("butterTop")};
    left: ${getScale("butterLeft")};
    position: absolute;
    border-radius: ${getScale("butterRadius")};
    box-shadow: 0 ${getScale("butterThickness")} 0 ${getScale("butterThickness")} #d67823;
    transform: scale(0);
    transition: 0.2s ease;
  }
`;

export const CrosswiseInput = styled.input<InputProps>`
  height: 40px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 40px;

  &:focus + label {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:checked + label .crosswises {
    transform: translateX(${getScale("travelDistance")});
  }

  &:checked + label .crosswise:nth-child(1) {
    background: #e27c31;
    box-shadow: 0 ${getScale("crosswiseThickness")} 0 ${getScale("crosswiseThickness")} #fbbe7c;
    transition-delay: 0.2s;
  }

  &:checked + label .crosswise:nth-child(2) {
    transform: scale(1);
    transition-delay: 0.2s;
  }

  &:checked + label .crosswise:nth-child(3) {
    transform: scale(1);
    transition-delay: 0.4s;
  }

  &:checked + label .butter {
    transform: scale(1);
    transition-delay: 0.6s;
  }
`;

export const CrosswiseLabel = styled.label<CrosswiseToggleProps>`
  width: ${getScale("toggleWidth")};
  height: ${getScale("toggleHeight")};
  background: ${({ theme, checked }) => theme.colors[checked ? "success" : "input"]};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  display: inline-block;
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: 20% center;
  cursor: pointer;
`;
