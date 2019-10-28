import React from "react";
import styled from "styled-components";

import {
  getHexColor,
  getButtonStyles,
  getHoverColor
} from "../../utils/getStyles";

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  margin: 10px;
  padding: ${props =>
    props.compact
      ? getButtonStyles("compact")
      : getButtonStyles(props.size).padding};
  background: ${props =>
    props.inverted ? "transparent" : getHexColor(props.color)};
  color: ${props =>
    props.inverted
      ? getHexColor(props.color)
      : getHexColor(props.textColor) || props.color !== "white"
      ? getHexColor("white")
      : getHexColor("black")};
  font-size: ${props => getButtonStyles(props.size).fontSize};

  border-style: solid;
  border-width: ${props => (props.inverted ? "2px" : "0.1px")};
  border-color: ${props =>
    props.inverted ? getHexColor(props.color) : "grey"};
  border-radius: 5px;
  cursor: pointer;

  :focus {
    outline: 0;
  }

  :hover {
    background: ${props => !props.inverted && getHoverColor(props.color)};
  }
`;
