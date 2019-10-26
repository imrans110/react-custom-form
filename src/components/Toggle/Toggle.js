import React from "react";
import styled from "styled-components";

import { getStyleSizes, getHexColor } from "../../utils/getStyles";

const Toggle = props => {
  return (
    <ToggleContainer {...props}>
      <input type="checkbox" />
      <span className="slider" />
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: ${props => getStyleSizes(props.size).width};
  height: ${props => getStyleSizes(props.size).height};

  :focus {
    outline: 0;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;

    :focus {
      outline: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 34px;
    background-color: ${props => getHexColor("white")};
    -webkit-transition: 0.4s;
    transition: 0.4s;

    :focus {
      outline: 0;
    }
  }

  .slider:before {
    position: absolute;
    content: "";
    height: ${props => getStyleSizes(props.size).round};
    width: ${props => getStyleSizes(props.size).round};
    left: ${props => getStyleSizes(props.size).left};
    bottom: ${props => getStyleSizes(props.size).bottom};
    background-color: white;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${props => getHexColor(props.color)};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${props => getHexColor(props.color)};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(${props => getStyleSizes(props.size).round});
    -ms-transform: translateX(${props => getStyleSizes(props.size).round});
    transform: translateX(${props => getStyleSizes(props.size).round});
  }
`;
