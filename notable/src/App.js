import React, { Component } from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SingleNote from "./components/SingleNote";

// something styled - need flex for sidebar and notes
const MainDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 5px auto;

  `;
  
  const SideBar = styled.div`
  width: 22%;
  background-color: silver;
  padding: 15px;
  h1 {
    font-size: 2.6rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
  `;
  
  const DisplayDiv = styled.div`
  width: 75%;
  background-color: whitesmoke;
`;

const Button = styled.div`
  width: 95%;
  height: 50px;
  margin: 20px auto 15px;
  background-color: darkcyan;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
`;

class App extends Component {
  render() {
    return (
      <MainDiv>
        <SideBar>
          <h1>Lambda Notes</h1>
          <Button>View Your Notes</Button>
          <Button>+ Create a New Note</Button>
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
