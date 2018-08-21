import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import './App.css';
import notes from './assets/init_notes';
import NoteList from './components/NoteList.js';
import HeadCtrls from './components/HeadCtrls.js';
import NewNote from './components/NewNote.js';
import NoteView from './components/NoteView.js';

const AppContainer = styled.div`
  width:405px;
  margin:0 auto;
`;
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      notesArr: [],
    }
  }

  componentDidMount(){
    this.setState({notesArr: notes});
  }

  matchSelectNoteToArray = (it) => {
    let item = this.state.notesArr.find((note) => {
      return (it === note.id);
    })
    return item;
  }

  newArrByFilter = (arr, id) => {
    return arr.filter((elem)=>{
      return elem.id !== id
    })
  }

  handleDeleteNote = (del) => {
   let newArr = this.newArrByFilter(this.state.notesArr, del);
    console.log(newArr);
    this.setState({ notesArr: newArr});
  }

  handleNewNote = (input) => {
    input.id = this.state.notesArr.length;
    let notes = this.state.notesArr.slice();
    notes.push(input);  
    this.setState({ notesArr: notes });
  }

  render() {
    return (
      <AppContainer>
        <Route path="/addnote" render={props => { return <NewNote handleNewNote={this.handleNewNote}/>}} />
        <Route path="/noteView/:id" render={(props) => { return <NoteView {...props} allNotes={this.state.notesArr} delete={this.handleDeleteNote}/> }} />
        <Route exact path="/" render={props => { return <HeadCtrls notes={this.state.notesArr}/> }} />
        <Route exact path="/" render={props => { return <NoteList notes={this.state.notesArr} /> }} />
      </AppContainer>
    )
  }
}

export default App;
