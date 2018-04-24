import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainMenu from './components/MainMenu/MainMenu';
import Note from './components/Notes/Note'
import NoteList from './components/Notes/NoteList';
import NoteForm from './components/Notes/NoteForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {id:0,'title': 'Note 1', 'content': 'some test'},
                {id:1,'title': 'Note 2', 'content': 'some test'},
                {id:2,'title': 'Note 3', 'content': 'some test'},
                {id:3,'title': 'Note 4', 'content': 'some test'},
                {id:4,'title': 'Note 5', 'content': 'some test'},
                {id:5,'title': 'Note 6', 'content': 'some test'},
                {id:6,'title': 'Note 7', 'content': 'some test'},
                {id:7,'title': 'Note 8', 'content': 'some test'},
                {id:8,'title': 'Note 9', 'content': 'some test'},
                {id:9,'title': 'Note 10', 'content': 'some test'},
                {id:10,'title': 'Note 11', 'content': 'some test'},
                {id:11,'title': 'Note 12', 'content': 'some test'},
                {id:12,'title': 'Note 13', 'content': 'some test'},
                {id:13,'title': 'Note 14', 'content': 'some test'},
                {id:14,'title': 'Note 15', 'content': 'some test'}
            ]
        };
    }
  render() {
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    <MainMenu/>
                </Col>
                <Col lg='9'>
                    <NoteList notes={this.state.notes}/>
                </Col>
            </Row>
            <NoteForm/>
        </Container>
    );
  }
}

export default App;
