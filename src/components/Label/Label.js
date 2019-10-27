import React from "react";
import styled from "styled-components";

import { getSize } from "../../utils/getSize";

const Label = props => {
  return <LabelContainer>{props.children}</LabelContainer>;
};

export default Label;

const LabelContainer = styled.span`
  margin: 10px 10px 5px;
  color: ${props => props.color || "#000"};
  font-size: ${props => getSize(props.size, "font")};
  font-weight: 500;
`;
