import React, { Component } from 'react';
import './App.css';
import Styled from 'styled-components'
import {Heading, Button} from './styles/styles';
import Note from './components/Note';
import {data} from './data';
import { Link, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import NewNote from './components/NewNote';
import EditNote from './components/EditNote';


const Container = Styled.div`
  display: flex;
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

const NoteContainer = Styled.div`
    display: flex;
    flex-direction: column;          
    padding: 10px;
    width: 180px;
    height: 180px;
    border: 1px solid #979797;
    background: #FFFFFF;
    margin-bottom: 20px;
`;

const NoteHeading = Styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
    border-bottom: 1px solid #979797;
    padding-bottom: 5px;
    text-decoration: none;

`;

const Body = Styled.p`
    font-family: 'Raleway', sans-serif;
    color: #4A4A4A;
    font-size: 14px;
    overflow: hidden;
    
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
      <Sidebar />
      <NotesContainer>
        <Heading>Your notes:</Heading>
        <NotesList>
          {this.state.notes.map(note => {
            return <NoteContainer style={{overflow: 'hidden'}}>
           <Link to={`/note/${note.id}`}  style={{textDecoration: 'none', color: '#000000'}} > 
           <Note key={note.id} title={note.title} body={note.body} /></Link>
            </NoteContainer>
          })}
      </NotesList>
      </NotesContainer>
      </Container>
    );
  }
}

export default App;
