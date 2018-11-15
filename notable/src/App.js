import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SingleNote from "./components/SingleNote";

// something styled - need flex for sidebar and notes
const MainDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: auto;
  `;
  
  const SideBar = styled.div`
  width: 25%;
  border: 1px solid black;
  h1 {
    font-size: 4.6rem;
  }
  `;
  
  const DisplayDiv = styled.div`
  width: 70%;
  border: 1px solid black;
`;

class App extends Component {
  render() {
    return (
      <MainDiv>
        <SideBar>
          <h1>Notable</h1>
        </SideBar>
        <DisplayDiv>
          <Route exact path="/" component={NoteList} />
          <Route path="/form" component={NoteForm} />
          <Route path="/note/:id" component={SingleNote} />
        </DisplayDiv>
      </MainDiv>
    );
  }
}

export default App;
