import React from "react";
import { Link } from "react-router-dom";
import NoteCard from "./NoteCard";
import { Col, Card, Row, Container } from "reactstrap";
import Note from "./Note";
import NavBar from "./NavBar";
import "./NoteCss.css";

const NoteList = props => {
  console.log("NoteList", props.notes);
  return (
    <Container style={{ display: "flex" }}>
      <Col sm="3">
        <NavBar />
      </Col>
      {/* EndNav */}
      <Container className="notesContainer">
          <br/>
          <br/>
          <h3>Your Notes:</h3>
          <br/>
        <Row className="cardRow">
          <Col sm="4">
            <NoteCard />
          </Col>
          <Col sm="4">
            <NoteCard />
          </Col>
          <Col sm="4">
            <NoteCard />
          </Col>
        </Row>
        {/* Row 1 */}
        <Row>
          <Col sm="4">
            <NoteCard />
          </Col>
          <Col sm="4">
            <NoteCard />
          </Col>
          <Col sm="4">
            <NoteCard />
          </Col>
        </Row>
        {/* Row 2 */}
        <Row>
          <Col sm="4">
            <NoteCard />
          </Col>
          <Col sm="4">
            <NoteCard />
          </Col>
          <Col sm="4">
            <NoteCard />
          </Col>
        </Row>
        {/* Row 3 */}
      </Container>
    </Container>
  );
};

export default NoteList;

//     <Link to={`/notes/${props.id}`}>
// <div>
// <h3>{props.title}</h3>
// <p>{props.content}</p>
// </div>
// </Link>
// );
// };
