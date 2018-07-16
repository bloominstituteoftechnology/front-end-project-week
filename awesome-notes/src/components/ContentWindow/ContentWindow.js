import React from "react";
import styled from "styled-components";

const StyledWindow = styled.div`
  position: relative;
  top: 0;
  left: 220px;
  background-color: #f3f3f3;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  height: 100vh;
  width: 668px;
`;

const ContentWindow = () => {
  return <StyledWindow>CONTENT WINDOW</StyledWindow>;
};

export default ContentWindow;
