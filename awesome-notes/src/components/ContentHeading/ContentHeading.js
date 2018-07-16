import React from "react";
import styled from "styled-components";

const StyledSubheading = styled.h2`
  font-weight: bold;
  font-size: 2rem;
`;

const CardContainer = props => {
  return <StyledSubheading>{props.message}</StyledSubheading>;
};

export default CardContainer;
