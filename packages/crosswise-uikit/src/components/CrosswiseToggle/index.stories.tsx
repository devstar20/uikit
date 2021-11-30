import React, { useState } from "react";
import CrosswiseToggle from "./CrosswiseToggle";

export default {
  title: "Components/CrosswiseToggle",
  component: CrosswiseToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <CrosswiseToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <CrosswiseToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
