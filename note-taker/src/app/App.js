import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import SidebarContainer from "./common/Sidebar/SidebarContainer";
import HomeContainer from "./home/HomeContainer";
import './styles/custom-props.css';
import CreateNoteContainer from "./create-new/CreateNoteContainer";
import NoteContainer from "./note-view/NoteContainer";
const AppContainer = styled.div`
  display: flex;

`;
const MainContentContainer = styled.div`
  background: var(--main-bg);
  position: absolute;
  left: var(--sidebar-width);
  right: 0;
  height: 100%;
  padding: 60px 25px;
`;
const App = () => {
  return (
    <AppContainer>
      <SidebarContainer />
      <MainContentContainer>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/create-new" component={CreateNoteContainer} />
        <Route exact path="/note/get/:id" component ={NoteContainer} />
      </MainContentContainer>
    </AppContainer>
  );
};

export default App;
