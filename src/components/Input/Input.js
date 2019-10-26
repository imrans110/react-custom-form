import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getSize } from "../../utils/getSize";
import { getIconName } from "../../utils/getIconName";
import { getHexColor } from "../../utils/getStyles";

const Input = ({ type, value, color }) => {
  return (
    <InputContainer color={color}>
      {getIconName(type)}
      <StyledInput type={type} />
    </InputContainer>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {}
};

export default Input;

const InputContainer = styled.div`
  margin: 10px;

  svg {
    position: absolute;
    padding: 5px;
    color: ${props => (props.color ? getHexColor(props.color) : "grey")};
  }
`;

const StyledInput = styled.input`
  border: 1px solid grey;
  border-radius: 3px;
  padding: 5px 5px 5px 26px;
  min-height: 18px;
  font-size: ${props => (props.size ? getSize(props.size) : getSize())};
  color: ${props => (props.textColor ? getHexColor(props.textColor) : "black")};

  :focus {
    outline: 0;
  }
`;
