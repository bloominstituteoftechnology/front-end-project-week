import React, { Component } from 'react';
import Styled from 'styled-components'
import {Heading} from './../styles/styles';
import Note from './Note';
import {data} from './../data';
import { Link } from 'react-router-dom';
import EditNote from './EditNote';
import axios from 'axios';


const Container = Styled.div`
  display: flex;
`;
const NotesContainer = Styled.div`
  display: block;
  width: 100%;
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


class Notes extends Component {
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

      <NotesContainer>
        <Heading>Your notes:</Heading>
        <NotesList>
          {this.state.notes.map(note => {
            return <NoteContainer key={note.id} style={{overflow: 'hidden'}}>
         <Link to={{pathname: `/note/${note.id}`, state: {title: note.title, body: note.body, id: note.id}}} style={{textDecoration: 'none', color: '#000000'}} > 
           <NoteHeading>{note.title}</NoteHeading>
           <Body>{note.body} </Body></Link>
            </NoteContainer>
          })}
      </NotesList>
      </NotesContainer>
      </Container>
    );
  }
}

export default Notes;

/*      axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
          console.log(response);
          this.setState({notes: response.data})
      })
      .catch(err => {
          console.log(err)
      })*/