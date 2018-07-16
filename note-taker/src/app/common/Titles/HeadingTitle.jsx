import React from "react";
import styled from "styled-components";

const StyledHeadingTitle = styled.h2`
  text-transform: capitalize;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 30px;
`;
const HeadingTitle = props => {
return (
<StyledHeadingTitle>
    {props.children}</StyledHeadingTitle>);
};

export default HeadingTitle;
