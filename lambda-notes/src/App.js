import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import styled from 'styled-components';

import NoteList from './components/NoteList';
import NewNote from './components/NewNote';
import SideBar from './components/SideBar';
import NoteView from './components/NoteView';
import EditNote from './components/EditNote';


class App extends Component {
  state={
    notes: [
      {
        id:'1537900213158',
        title: 'Note Title',
        content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis',
      }
    ],
    isUpdating:false
  }

  createNote = newNote => {
    this.setState({notes:[...this.state.notes, newNote]})
  }

  // editNote = (selectedNote) => {
  //   console.log('editnote:', selectedNote)
  //     let currentNote=this.state.notes.filter(note => note.id !== selectedNote.id)
  //     let editedNote=this.state.notes.find(note => note.id == selectedNote.id)[0]
  //     editedNote.title=selectedNote.title
  //     editedNote.content=selectedNote.content
  //     this.setState({editedNote, ...currentNote})
  // }

  deleteNote = id => {
    this.setState({notes: this.state.notes.filter(note => note.id !== id)});
  }

  render(){
    return(
      <AppContainer>
        <SideNav>
          <SideBar />
        </SideNav>
        <MainContent>
          <Route path="/list-view" render={props => 
            <NoteList {...props} notes={this.state.notes} />
          } />
          <Route path="/create-new" render={props =>
            <NewNote {...props} createNote={this.createNote} />
          } />
          <Route path="/note-view/:id" render={props =>
            <NoteView {...props} notes={this.state.notes} editNote={this.editNote} deleteNote={this.deleteNote} />
          } />
          <Route path="/edit-view/:id" render={props => 
            <EditNote {...props} isUpdating={this.state.isUpdating} editNote={this.editNote} />
          } />
        </MainContent>    
      </AppContainer> 
    ) 
  }
}

const AppContainer = styled.div`
  display:flex;
  margin: 60px 0 0 1%;
  width: 72.25%;
  height: 885px;
  `;
const SideNav = styled.div`
  width: 25%;
  border: 1px solid grey;
  background-color: #D8D8D8;
`;

const MainContent = styled.div`
  width: 76%;
  border: 1px solid grey;
  background-color: #F3F3F3;

`;



export default withRouter(App);
