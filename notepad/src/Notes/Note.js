import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
// import { editNote, deleteNote } from './notesActions';
import { withRouter, Link } from 'react-router-dom';

class Note extends Component {
  state = {
    note: {}
  }

  render() {
    return (
      <Container>
        <Col className='Container'>
          <Row className='links'>
            {/* <Link>edit</Link>
            <Link>delete</Link> */}
          </Row>
          <Row className='title'>
            {this.state.note.title}
          </Row>
          <Row className='content'>
            {this.state.note.content}
          </Row>
        </Col>
      </Container >
    );
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const notes = this.props.notes;
    const currentNote = notes[id - 1];

    this.setState({ note: currentNote })
  }
}

const mapStateToProps = state => {
  return state;
};

const actions = {
  // editNote,
  // deleteNote
};

export default withRouter(connect(mapStateToProps, actions)(Note));