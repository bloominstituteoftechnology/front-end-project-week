import React, { Component } from 'react';
import { Container, Row, Col, } from 'reactstrap';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Note from './Note';
import fire from '../../components/newnote/fire.js';

export default class Dashboard extends Component {
    
  constructor(){
      super();
      this.state = {
          notes: []
      };
  }

  componentDidMount() {
    const notesRef = fire.database().ref('notes');
    notesRef.on('value', (snapshot) => {
      let notes = snapshot.val();
      let newState = [];
      for (let note in notes) {
          newState.push({
          title: notes[note].title,
          body: notes[note].body,
          id: note
          });
      }
      this.setState({
          notes: newState
      });  
    }); 
  }

  render() {
    return (
        <div>
            <Container className="container">
                <Row className="border">
                    <Col xs="3" className="sidebar">
                        <h1 className="mt-3 text-left heading">Lambda Notes</h1>
                        <button type="button" className="mt-4 btn btn-lg btn-block rounded-0">
                            View Your Notes
                        </button>
                        <Link to="/create" className="create-link">
                            <button type="button" className="mt-4 btn btn-lg btn-block rounded-0">
                                + Create New Note
                            </button>
                        </Link>
                    </Col>
                    <Col xs="9" className="main">
                        <Row className="ml-2 mt-5 pt-4 mb-4">
                            <h4 className="text-left heading">Your Notes:</h4>
                        </Row>
                        <Row className="mb-4">
                        {this.state.notes.map(note =>
                            <Col xs="4" className="mb-4" key={note.id}>
                            <Note
                            key={note.id} 
                            id={note.id}
                            title={note.title}
                            body={note.body}
                             />
                            </Col>
                        )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}
