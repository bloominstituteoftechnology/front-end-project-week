import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Note from './Note';
import keyIndex from 'react-key-index';

export default class Dashboard extends Component {
    
  constructor(props){
      super(props);
      this.state = {
        notes: this.props.notes
      };
  }

  componentDidMount() {
      console.log(this.state.notes);

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
        }
        else if (typeof this.props.location.state.id != "undefined") {
            console.log(this.props.location.state.id.id);
            let newNotes = [];
            newNotes = [...this.state.notes];
            for (let i = 0; i < newNotes.length; i++) {
                if (newNotes[i].id === this.props.location.state.id.id) {
                    newNotes[i].title = this.props.location.state.newTitle;
                    newNotes[i].body = this.props.location.state.newBody;
                }
            }
            this.setState({notes: newNotes});
        }
     }*/}
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
                            body={note[0].body} />
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
