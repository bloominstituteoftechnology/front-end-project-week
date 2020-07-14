import React, { Component } from "react";
import { Card, CardTitle, CardText, CardColumns, CardBody } from "reactstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({ notes: response.data });
      });
  }
  render() {
    return (
      <div>
        <h2>Your Notes</h2>
        <CardColumns>
          {this.state.notes.map(note => {
            return (
              <NavLink to={`/notes/${note._id}`}>
                <Card key={note._id}>
                  <CardBody>
                    <CardTitle>{note.title}</CardTitle>
                    <hr />
                    <CardText>{note.textBody}</CardText>
                  </CardBody>
                </Card>
              </NavLink>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

export default Notes;
