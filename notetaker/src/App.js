import React, { Component } from "react";
import { Route } from "react-router";
import { Row, Col, Container } from "reactstrap";
import Sidebar from "./components/Sidebar/Sidebar.js";
import "./App.css";
import NoteList from "./components/NoteList/NoteList";
import CreateNote from "./components/CreateNote/CreateNote";
// import Note from "./components/Note/Note,";

class App extends Component {
  constructor() {
    super();
    this.state = {
      note: []
    };
  }

  addNote = newNote => {
    this.setState({ note: [...this.state.cards, newNote] });
  };

  editNote = updateNote => {
    this.setState({ note: [...this.state.updateNote]});
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Sidebar />
          <Row>
            <Col>
              <Route exact path="/" component={NoteList} />
              <Route path="/CreateNote" component={CreateNote} />
              {/* <Route path = '/NoteView' component = { Notes }/> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
