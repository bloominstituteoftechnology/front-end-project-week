import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainMenu from './components/MainMenu/MainMenu';
import Note from './components/Notes/Note'
import NoteList from './components/Notes/NoteList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {'title': 'Note 1', 'content': 'some test'},
                {'title': 'Note 2', 'content': 'some test'},
                {'title': 'Note 3', 'content': 'some test'},
                {'title': 'Note 4', 'content': 'some test'},
                {'title': 'Note 5', 'content': 'some test'},
                {'title': 'Note 6', 'content': 'some test'},
                {'title': 'Note 7', 'content': 'some test'},
                {'title': 'Note 8', 'content': 'some test'},
                {'title': 'Note 9', 'content': 'some test'},
                {'title': 'Note 10', 'content': 'some test'},
                {'title': 'Note 11', 'content': 'some test'},
                {'title': 'Note 12', 'content': 'some test'},
                {'title': 'Note 13', 'content': 'some test'},
                {'title': 'Note 14', 'content': 'some test'},
                {'title': 'Note 15', 'content': 'some test'}
            ]
        };
    }
  render() {
    return (
        <Container>
            <Row>
                <Col>
                    <MainMenu/>
                </Col>
                <Col>
                    <NoteList notes={this.state.notes}/>
                </Col>
            </Row>

        </Container>
    );
  }
}

export default App;
