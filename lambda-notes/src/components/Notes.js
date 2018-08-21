import React, { Component } from "react";
import axios from "axios";
import Note from "./Note";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
// import SidebarNav from "./SidebarNav";
import "../App.css";

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentWillMount() {
    this.getNotes();
  }

  getNotes() {
    axios
      .get("http://localhost:3300/all")
      .then(response => {
        this.setState({ notes: response.data }, () => {});
      })
      .catch(err => console.log(err));
  }

  render() {
    const noteItems = this.state.notes.map((note, i) => {
      return (
        <Col key={i} xs="3">
          <Note key={i} note={note} />
        </Col>
      );
    });
    return (
      <div>
        <h1>Notes</h1>
        <Row>{noteItems}</Row>
        <Link to="/note/add">
          <i className="fa fa-plus" /> Add Note
        </Link>
      </div>
    );
  }
}

export default Notes;
