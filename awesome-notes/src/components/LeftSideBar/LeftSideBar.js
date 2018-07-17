import React from "react";
import styled from "styled-components";

import SideBarButton from "./SideBarButton";

const LeftStyled = styled.div`
  width: 220px;
  height: 100vh;
  background-color: #d8d8d8;
  position: absolute;
  top: 0;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const MainHeader = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-left: 1rem;
  line-height: 3.5rem;
  margin-top: 1rem;
`;

const CenteringDiv = styled.div`
  margin: 0 auto;
`;

const LeftSideBar = () => {
  return (
    <LeftStyled>
      <MainHeader>
        Lambda<br />Notes
      </MainHeader>
      <CenteringDiv>
        <SideBarButton message="View Your Notes" url="/" />
      </CenteringDiv>
      <CenteringDiv>
        <SideBarButton message="+ Create New Note" url="/new" />
      </CenteringDiv>
    </LeftStyled>
  );
};

export default LeftSideBar;
