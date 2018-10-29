import React, { Component } from 'react';
import NoteView from './NoteView';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const NotesContainer = styled.div`

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
        <h2>Your Notes:</h2>
        <NotesList>

            
            {this.state.notes.map(note =>
                <Link to = {`${note.id}`}>
                    
                    <h3>{note.title}</h3>
                </Link>)}
        </NotesList>
      </NotesContainer>
    );
  }
}
 export default NotesListView;