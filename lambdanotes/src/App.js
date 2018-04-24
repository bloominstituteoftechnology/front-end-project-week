import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Row, Col, Container } from "reactstrap";

import NoteList from "./components/NoteList";
import NoteView from "./components/NoteView";
import Menu from "./components/Menu";

const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const initialNotes = [
  {
    title: "First Note NOTENOTENOTENOTENOTENOTENOTENOTE",
    content: placeholderText + placeholderText
  },
  { title: "Second Note", content: placeholderText },
  { title: "Third Note", content: placeholderText },
  { title: "Fourth Note", content: placeholderText },
  { title: "Fifth Note", content: placeholderText },
  { title: "Sixth Note", content: placeholderText },
  { title: "Seventh Note", content: placeholderText }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: initialNotes
    };
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm="3">
              <Route path="/" component={Menu} />
            </Col>
            <Col sm="9">
              <Route
                exact
                path="/"
                render={props => {
                  return <NoteList notes={this.state.notes} />;
                }}
              />
              <Route
                exact
                path="/note/:id"
                render={props => {
                  return <NoteView {...props} notes={this.state.notes} />;
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
