import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import About from "./Components/About";
import Notes from "./Components/Notes";
import Note from "./Components/Note";
import NewForm from "./Components/NewForm";
import EditForm from "./Components/EditForm";
import TopBar from "./Components/TopBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  max-width: 1080px;
  border-top: 1px solid rgb(234, 237, 232);
  margin: 3%;
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