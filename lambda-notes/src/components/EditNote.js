import React from "react";
import { Button, Form, Input, Row, Container, Col } from "reactstrap";
import axios from "axios";

import "./EditNote.css";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      title: "",
      content: ""
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:7000/api/notes/${this.props.match.params.id}`)
      .then(response => {
        this.setState(() => ({
          note: response.data,
          title: response.data[0].title,
          content: response.data[0].content
        }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const updatedNote = {
      id: this.state.note.id,
      title: this.state.title,
      content: this.state.content
    };
    this.props.editNote(updatedNote);
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container className="edit-note">
        <Row>
          <Col>
            <h2>Edit Note:</h2>
          </Col>
        </Row>
        <Form>
          <Row>
            <Col sm="7">
              <Input
                onKeyPress={this.props.preventSubmit}
                onChange={this.handleInputChange}
                type="text"
                name="title"
                // placeholder={this.state.title}
                style={{ marginTop: 30 + "px", border: "2px solid lightgray" }}
                value={this.state.title}
              />
            </Col>
          </Row>
          <Input
            onChange={this.handleInputChange}
            type="textarea"
            name="content"
            // placeholder={this.state.content}
            rows="15"
            style={{ marginTop: 15 + "px", border: "2px solid lightgray" }}
            value={this.state.content}
          />
          <Row>
            <Col sm="4">
              <Button
                onClick={this.handleSubmit}
                onMouseUp={() => this.props.history.goBack()}
                color="info"
                style={{ marginTop: 15 + "px" }}
                block
              >
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default EditNote;
