import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './List.css';

const NoteButton = (props) => {
    return (
        <Col xs="4">
            <Link to={`/note/${props._id}`}>
                <button style={{ color: '#4A4A4A'}} className="note-card">
                    <h5 className="note-title">{props.title}</h5>
                    <p className="card-body">{props.textBody}</p>
                </button>
            </Link>
        </Col>
    )
}

export default class List extends Component {
  render() {
    console.log("LOOK AT ME:", this.props)
    return (
      <Container>
        <Row>
          <Col className="note-list">
            <h3 className="note-header">Your Notes:</h3>
            <div style={{ display: 'flex', flexWrap:'wrap'}}>
                {this.props.list.map(note => {
                    return <NoteButton key={note._id} title={note.title} textBody={note.textBody} _id={note._id} />
                })}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}