import React, { Component } from 'react';
import './App.css';
import Styled from 'styled-components'
import {Heading, Button} from './styles/styles';
import Note from './components/Note';
import {data} from './data';

const Container = Styled.div`
  display: flex;
`;

const Sidebar = Styled.div`
  background: #D8D8D8;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
  height: 100vh;
  padding: 5px;
`;

const NotesContainer = Styled.div`
  display: block;
  width: 75%;
  padding: 70px 30px;
  background: #F3F3F3;
  
`;

const NotesList = Styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;


class App extends Component {
  constructor() {
    super();
    this.state = {
        notes: []      
    }
  }

  componentDidMount() {
    this.setState({notes: data})
  }
  render() {
    return (
      <Container>
      <Sidebar>
      <Heading main>Lambda Notes</Heading>
      <Button> View Your Notes</Button>
      <Button>Create New Note</Button>
      </Sidebar>
      <NotesContainer>
        <Heading>Your notes:</Heading>
        <NotesList>
          {this.state.notes.map(note => {
            return <Note key={note.id} note={note}/>
          })}
      </NotesList>
      </NotesContainer>
      </Container>
    );
  }
}

export default App;
