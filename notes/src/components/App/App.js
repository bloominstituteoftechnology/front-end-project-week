import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import About from "../About";
import Notes from "../NoteComponents/Notes";
import Note from "../NoteComponents/Note";
import NewForm from "../Forms/NewForm";
import EditForm from "../Forms/EditForm";
import TopBar from "../Navigation/TopBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  border-top: 1px solid rgb(234, 237, 232);
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Container>
          <Switch>
            <Route exact path="/" render={props => <Notes {...props} />} />
            <Route
              exact
              path="/note/:id"
              render={props => <Note {...props} />}
            />
            <Route path="/new-note" render={props => <NewForm {...props} />} />
            <Route
              path="/note/:id/edit"
              render={props => <EditForm {...props} />}
            />
            <Route path="/about" component={About} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
