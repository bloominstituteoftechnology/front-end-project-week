import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Note from './Note';
import fire from '../../components/newnote/fire.js';

export default class Dashboard extends Component {
    
  constructor(props){
      super(props);
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

  componentWillMount() {
    if (typeof this.props.location.state != "undefined") {
        if (typeof this.props.location.state.deleteID != "undefined") {
            console.log(this.props.location.state.deleteID.id.toString());
            for (let i = 0; i < this.state.notes.length; i++) {
                if (this.state.notes[i].id === this.props.location.state.deleteID.id.toString()) {
                    console.log(this.state.notes[i].id);
                    const itemRef = fire.database().ref(`/items/${this.state.notes[i].id}`);
                    itemRef.remove();
                }
            }
        }
        if (typeof this.props.location.state.id != "undefined") {
            let newNotes = [];
            newNotes = [...this.state.notes];
            for (let i = 0; i < this.state.notes.length; i++) {
                if (newNotes[i].id === this.props.location.state.id.id) {
                    this.state.notes[i][0].title = this.props.location.state.newTitle;
                    this.state.notes[i][0].body = this.props.location.state.newBody;
                }
            }
        }
     }
  }

  render() {
    return (
        <div>
            <Container className="container">
                <Row className="border">
                    <Col xs="3" className="sidebar">
                        <h1 className="mt-3 text-left heading">Lambda Notes</h1>
                        <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">
                            View Your Notes
                        </button>
                        <Link to="/create">
                            <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">
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
                            <Col xs="4" className="mb-4">
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
