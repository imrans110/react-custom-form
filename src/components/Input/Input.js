import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getSize } from "../../utils/getSize";
import { getIconName } from "../../utils/getIconName";
import { getHexColor } from "../../utils/getStyles";
import mediaQuerySize from "../../utils/mediaQuerySize";

const Input = props => {
  return (
    <InputContainer {...props}>
      {props.icon !== false && getIconName(props.type)}
      <StyledInput {...props} />
    </InputContainer>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {}
};

export default Input;

const InputContainer = styled.div`
  svg {
    position: absolute;
    padding: 5px;
    color: ${props =>
      props.color ? getHexColor(props.color) : getHexColor("grey")};
  }
`;

const StyledInput = styled.input`
  border: 1px solid ${props => (props.disabled ? "#8080802e" : "grey")};
  border-radius: 3px;
  padding: 5px 5px 5px 26px;
  min-height: 18px;
  box-sizing: border-box;
  font-size: 15px;
  background: #fff !important;
  color: ${props => (props.textColor ? getHexColor(props.textColor) : "black")};
  width: ${props => (props.fluid ? "100%" : getSize(props.size, "input"))};
  border-width: ${props => (props.transparent ? "0" : "1px")};

  :focus {
    outline: 0;
  }

  @media ${mediaQuerySize.sm} {
    width: 100% !important;
  }
`;
