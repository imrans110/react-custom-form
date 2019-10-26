import React from "react";
import styled from "styled-components";

import { getSize } from "../../utils/getSize";
import { getHexColor } from "../../utils/getStyles";

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  padding: 5px 10px;
  margin: 10px;
  background: ${props => getHexColor(props.color)};
  color: ${props =>
    getHexColor(props.textColor) || props.color !== "white"
      ? getHexColor("white")
      : getHexColor("black")};
  font-size: ${props => (props.size ? getSize(props.size) : getSize())};
  border: 1px solid white;
  border-radius: 5px;

  :focus {
    outline: 0;
  }
`;
