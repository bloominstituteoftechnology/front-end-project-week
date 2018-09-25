import React from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import axios from "axios";

import "./Note.css";
import DeleteModal from "./DeleteModal";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:7000/api/notes/${this.props.match.params.id}`)
      .then(response => {
        this.setState(() => ({
          note: response.data[0]
        }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    const { title, content, id } = this.state.note;
    return (
      <Container className="note">
        <Row noGutters>
          <Col xs="10" />
          <Col xs="1">
            <Link style={{ color: "black" }} to={`/notes/${id}/edit`}>
              edit
            </Link>
          </Col>
          <Col xs="1">
            <DeleteModal
              note={this.state.note}
              deleteNote={this.props.deleteNote}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="9">
            <h2>{title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{content}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Note;
