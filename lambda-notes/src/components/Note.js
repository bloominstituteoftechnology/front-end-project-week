import React from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import DeleteModal from "./DeleteModal";
import "./Note.css";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.notes !== this.props.notes) {
      this.setState({
        notes: this.props.notes
      });
    }
  }

  render() {
    const id = this.props.match.params.id;

    const note = this.state.notes.find(note => note.id === id.toString());
    if (!note) return (<div>Loading...</div>);

    const { title, content} = note;
    return (
      <Container className="note">
        <Row noGutters>
          <Col xs="10"> </Col>{" "}
          <Col xs="1">
            <Link
              style={{
                color: "black"
              }}
              to={`/notes/${id}/edit`}
            >
              {" "}
              <i className="fas fa-edit"> </i>
            </Link>
          </Col>{" "}
          <Col xs="1">
            <DeleteModal
              note={note}
              deleteNote={this.props.deleteNote}
            />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row>
          <Col>
            <h2> {title} </h2>{" "}
          </Col>{" "}
        </Row>{" "}
        <Row>
          <Col>
            <p> {content} </p>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>
    );
  }
}



export default Note;



