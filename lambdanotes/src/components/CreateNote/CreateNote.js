import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

export default class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleNewInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCreateNote = () => {
    const note = {
      title: this.state.title,
      content: this.state.content
    };

    axios
      .post("http://localhost:5000/notes", note)
      .then(savedNote => {
        console.log(note);
        this.props.getNotes();
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ title: "", content: "" });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm={{ size: 8, offset: 4 }}>
            <h1>Create New Note:</h1>
            <form>
              <label>
                <input
                  type="text"
                  onChange={this.handleNewInput}
                  name="title"
                  value={this.state.title}
                  placeholder="Note Title"
                />
              </label>

              <label>
                <input
                  type="text"
                  onChange={this.handleNewInput}
                  name="content"
                  value={this.state.content}
                  placeholder="Note Content"
                />
              </label>

              <Link to="/">
                <button type="button" onClick={this.handleCreateNote}>
                  Save
                </button>
              </Link>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
