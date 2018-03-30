import React, { Component } from 'react';
import notestyles from './notestyles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

class NotesPage extends Component {
  render() {
    return (
      <Container>
        <h3>Your Notes:</h3>
        <Row>
          {this.props.notes.map(note => {
            return (
              <Col sm="4" className="note" key={note.id}>
                <Link to={`FullNote/${note.id}`}>
                  <div>{note.title}</div>
                  <p className="note-text">{note.text}</p>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(NotesPage);
