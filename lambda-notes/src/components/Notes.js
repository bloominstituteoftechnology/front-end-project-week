import React, { Component } from "react";
import axios from "axios";
import Note from "./Note";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import SidebarNav from "./SidebarNav";
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
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({ notes: response.data }, () => {});
      })
      .catch(err => console.log(err));
  }

  render() {
    const noteItems = this.state.notes.map((note, i) => {
      return (
        <Col xs="3">
          <Note key={note._id} note={note} />
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
