import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Note from "../Note/Note.js";

export default class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={{ size: 8, offset: 4 }}>
            <h1 className="notesList__title">Your Notes:</h1>
            {this.props.notes.map(note => (
              <div>
                <Note
                  className="notesList"
                  key={note.id}
                  note={note}
                  // getNotes={() => this.componentDidMount()}
                />
              </div>
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}
