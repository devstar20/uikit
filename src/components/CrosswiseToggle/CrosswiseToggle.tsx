import React from "react";
import { CrosswiseStack, CrosswiseInput, CrosswiseLabel } from "./StyledCrosswiseToggle";
import { CrosswiseToggleProps, scales } from "./types";

const CrosswiseToggle: React.FC<CrosswiseToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <CrosswiseStack scale={scale}>
    <CrosswiseInput id={props.id || "crosswise-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <CrosswiseLabel scale={scale} checked={checked} htmlFor={props.id || "crosswise-toggle"}>
      <div className="crosswises">
        <div className="crosswise" />
        <div className="crosswise" />
        <div className="crosswise" />
        <div className="butter" />
      </div>
    </CrosswiseLabel>
  </CrosswiseStack>
);

CrosswiseToggle.defaultProps = {
  scale: scales.MD,
};

export default CrosswiseToggle;
