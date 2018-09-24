import React, { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

export default class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 handleDelete = event => {
    // event.preventDefault();
    console.log('event', event);
    this.props.history.push("/notes");
    this.props.deleteNote(event);
  };

  render() {
    const note = this.props.note.find(
      note => note.id === parseInt(this.props.match.params.id, 10) //OR HAVE IT === this.props.match.params.id
      // if each individual id is a string
    );
    console.log("im single note props", this.props);
    return (
      <div className="note-container">
        <div className="singleNote-buttonContainer">
          <Link to={`/edit/${note.id}`}>edit</Link>
          <DeleteModal deleteNote={this.handleDelete} noteId={note.id} />
        </div>
        <Card key={note.id}>
          <CardTitle>{note.title}</CardTitle>
          <CardText>{note.content}</CardText>
        </Card>
      </div>
    );
  }
}
