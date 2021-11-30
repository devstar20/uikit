import React from "react";
import styled from "styled-components";
import { SpinnerProps } from "./types";

// const loading = require("images/spinner.gif");

const Container = styled.div`
  position: relative;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <img alt="Loading" src="images/spinner.gif" width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
