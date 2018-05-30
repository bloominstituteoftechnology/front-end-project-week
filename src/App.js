import React, { Component } from "react";
import "./App.css";
import { notes } from "./Notes/notes";
import { Route } from "react-router-dom";
import { Col, Row } from "reactstrap";
import axios from "axios";
import Notes from "./Components/ListView";
import Home from "./Components/home";
import Note from "./Components/NoteView";
import CreateView from "./Components/CreateView";
import EditView from "./Components/EditView";
const url = "https://notes-back-end.herokuapp.com/notes";
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    console.log("i mounted");
    this.updateGet();
  }
  updateGet = () => {
    console.log("i worked");
    axios
      .get(url)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  deleteNote = noteId => {
    axios
      .delete(`${url}/${noteId}`)
      .then(response => {
        this.updateGet();
      })
      .catch(err => {
        console.log(err);
      });
  };
  trimmer = input => {
    if (input.length > 300) {
      let modi = input;
      modi = modi
        .split("")
        .splice(0, 297)
        .join("");
      return modi + "...";
    } else {
      return input;
    }
  };
  titleTrimmer = input => {
    if (input.length > 22) {
      let modi = input;
      modi = modi
        .split("")
        .splice(0, 19)
        .join("");
      return modi + "...";
    } else {
      return input;
    }
  };

  render() {
    console.log(this.state);
    return (
      <Row className="App">
        <Col xs="12">
          <Route
            path="/"
            render={props => <Home updateGet={this.updateGet} />}
          />
        </Col>
        <Col xs="12" className="components">
          <Route
            exact
            path="/"
            render={props => <Notes titleTrim={this.titleTrimmer}trimmer={this.trimmer} {...props} notes={this.state.notes} />}
          />
          <Route path="/notes/:id" component={Note} />
        </Col>
      </Row>
    );
  }
}

export default App;
