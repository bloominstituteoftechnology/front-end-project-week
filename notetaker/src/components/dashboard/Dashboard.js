import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Note from './Note';
import fire from './fire.js';

export default class Dashboard extends Component {
    
  constructor(props){
      super(props);
      this.state = {
        notes: this.props.notes
      };
  }

  /*handleDelete = id => {
    for (let i = 0; i < this.state.notes.length; i++) {
        if (this.state.notes[i][0].id === id) {
            this.state.notes.splice(i, 1);
        }
    }
  }*/

  componentWillMount() {
    let notesRef = fire.database().ref('notes').orderByKey().limitToLast(100);
    {/*if (typeof this.props.location.state != "undefined") {
        if (typeof this.props.location.state.newNoteTitle != "undefined") {
            this.setState(previousState => ({
                notes: [...previousState.notes, {title: this.props.location.state.newNoteTitle,
                    body: this.props.location.state.newNoteBody,
                    id: ''
                    }]
            }));
            let noteLength = this.state.notes.length;
            let lastIn = this.state.notes[noteLength - 1];
            console.log(lastIn);
        }*/}
    if (typeof this.props.location.state != "undefined") {
        if (typeof this.props.location.state.deleteID != "undefined") {
            for (let i = 0; i < this.state.notes.length; i++) {
                if (this.state.notes[i][0].id === this.props.location.state.deleteID.id) {
                    this.state.notes.splice(i, 1);
                }
            }
        }
        if (typeof this.props.location.state.id != "undefined") {
            let newNotes = [];
            newNotes = [...this.state.notes];
            for (let i = 0; i < this.state.notes.length; i++) {
                if (newNotes[i][0].id === this.props.location.state.id.id) {
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
                        <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">View Your Notes</button>
                        <Link to="/create">
                            <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">+ Create New Note</button>
                        </Link>
                    </Col>
                    <Col xs="9" className="main">
                        <Row className="ml-2 mt-5 pt-4 mb-4">
                            <h4 className="text-left heading">Your Notes:</h4>
                        </Row>
                        <Row className="mb-4">
                        {this.state.notes.map(note =>
                            <Col xs="4" className="mb-4" key={note.id}>
                            <Note id={note[0].id}
                            title={note[0].title}
                            body={note[0].body}
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
