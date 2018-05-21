import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col } from "reactstrap";

import dummyData from "./Components/Dummy-Data";
import NoteCard from "./Components/NoteCard";

class App extends Component {
  render() {
    console.log("DUMMYDATA", dummyData);
    return (
      <div className="App">
        <Row>
          {dummyData.map((note, i) => (
            <Col sm="4">
              <NoteCard key={i} noteData={note} />{" "}
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default App;
