import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import axios from "axios";

export default class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: ""
    };
  }

  componentDidMount() {
    // console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    this.getNote(id);
  }

  getNote = id => {
    axios
      .get(`http://localhost:5000/notes`)
      .then(response => {
        if (id > response.data.length) {
          alert("Note not found");
        } else {
          console.log("response", response.data[id]);
          this.setState({ note: response.data[id] });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.getNote(newProps.match.params.id);
    }
  }

  deleteNote = id => {
    axios
      .delete(`http://localhost:5000/notes/${id}`)
      .then(response => {
        this.props.getNotes();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // console.log('note:', this.state.note);
    return (
      <div>
        <Row>
          <Col sm={{ size: 8, offset: 4 }}>
          <button>edit</button>
          <button onClick={() => this.deleteNote(this.state.note.id)}>
              delete</button>
            <h3>{this.state.note.title}</h3>
            <p>{this.state.note.content}</p>
          </Col>
        </Row>
      </div>
    );
  }
}
