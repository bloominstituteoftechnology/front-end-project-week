import React, { Component } from 'react';
import notestyles from './notestyles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

class NotesPage extends Component {
  render() {
    return (
      <div className="notepage">
        <h3>Your Notes:</h3>
        <Container>
          <Row className="notelist">
            {this.props.notes.map(note => {
              return (
                <Col sm="3" className="note" key={note.id}>
                  <Link to={`FullNote/${note.id}`}>
                    <h4>{note.title}</h4>
                    <p className="note-text">{note.text}</p>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(NotesPage);
