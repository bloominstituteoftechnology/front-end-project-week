import React from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes,
      note: {}
    };
  }
  componentDidMount() {
    let noteID = this.props.match.params.id;
    const note = this.state.notes.find(note => note.id === Number(noteID));
    if (!note) return;
    this.setState({ note });
  }

  render() {
    const { title, text, id } = this.state.note;
    return (
      <Container className="note">
        <Row noGutters>
          <Col xs="10" />
          <Col xs="1">
            <Link style={{ color: "black" }} to={`/notes/${id}/edit`}>
              <i class="fas fa-edit" />
            </Link>
          </Col>
          <Col xs="1" />
        </Row>
        <Row>
          <Col>
            <h2>{title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{text}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Note;
