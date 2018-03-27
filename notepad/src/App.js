import React, { Component } from 'react';
import './App.css';
import NotesList from './Notes/NotesList.js';
// import NoteForm from './Notes/NoteForm.js';
import { connect } from 'react-redux';
import { getNotes } from './Notes/notesActions';
import { Button, Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row>
          <Col xs='3'>
            <Row>
              <h2 className="navTitle">Lambda Notes</h2>
            </Row>
            <Row>
              <Button color="info">View Your Notes</Button>
            </Row>
            <Row>
              <Button color="info">+ Create New Note</Button>
            </Row>
          </Col>
          <Col xs='9'>
            <NotesList notes={this.props.notes} />
          </Col>
        </Row>

      </Container>
    );
  }

  componentDidMount() {
    this.props.getNotes();
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    isLoading: state.isLoading
  };
};

const actions = {
  getNotes
};

export default connect(mapStateToProps, actions)(App);
