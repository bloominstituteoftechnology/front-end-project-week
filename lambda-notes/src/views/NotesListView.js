import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import NotePreview from './NotePreview';

const NotesContainer = styled.div`
margin:0;

`

const YourNotes = styled.h2`
margin:0;
`
const NotesList = styled.div`

`

 class NotesListView extends Component {
     constructor(props){
         super(props);
         this.state = {
             notes: [{
                 'tags':['tag', 'otherTag'],
                 'title': 'Note Title',
                 'textBody':'Note Body',
                 '_id': ''
             }]
         }
     }
     componentDidMount = () => {
        axios
        .get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(response => {
          this.setState({notes: [...response.data] });
        })
        .catch(error => console.log(error));
      }
  render() {
    return (
      <NotesContainer>
        <YourNotes>Your Notes:</YourNotes>
        <NotesList>
            {this.state.notes.map(note =>
                <Link to = {`/note/${note._id}`}>
                    <NotePreview note={note} />                          
                 </Link>)}
        </NotesList>
      </NotesContainer>
    );
  }
}
 export default NotesListView;