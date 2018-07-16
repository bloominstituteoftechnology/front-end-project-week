import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import SidebarContainer from "./common/Sidebar/SidebarContainer";
import HomeContainer from "./home/HomeContainer";
import './styles/custom-props.css';
const AppContainer = styled.div`
  display: flex;

`;
const MainContentContainer = styled.div`
  background: lightblue;
  width: 100%;
  position: absolute;
  left: var(--sidebar-width);
`;
const App = () => {
  return (
    <AppContainer>
      <SidebarContainer />
      <MainContentContainer>
        <Route exact path="/" component={HomeContainer} />
      </MainContentContainer>
    </AppContainer>
  );
};

export default App;
