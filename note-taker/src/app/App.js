import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import SidebarContainer from "./common/Sidebar/SidebarContainer";
import HomeContainer from "./home/HomeContainer";
import "./styles/custom-props.css";
import CreateNoteContainer from "./create-new/CreateNoteContainer";
import NoteContainer from "./note-view/NoteContainer";
import EditNoteContainer from "./edit-view/EditNoteContainer";
const AppContainer = styled.div`
  display: flex;
  color: var(--main-font-color);
  background: var(--main-bg);
  height: 100vw;
  `;
const MainContentContainer = styled.div`
  position: absolute;
  background: var(--main-bg);
  left: var(--sidebar-width);
  right: 0;
  padding: 60px 25px;
`;
const App = () => {
  return (
    <AppContainer>
      <SidebarContainer />
      <MainContentContainer>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/create-new" component={CreateNoteContainer} />
        <Route exact path="/note/get/:id" component={NoteContainer} />
        <Route exact path="/:id/edit-view" component={EditNoteContainer} />
      </MainContentContainer>
    </AppContainer>
  );
};

export default App;
