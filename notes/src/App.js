import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import './App.css';
import notes from './assets/init_notes';
import NoteList from './components/NoteList.js';
import HeadCtrls from './components/HeadCtrls.js';
import NewNote from './components/NewNote.js';
import NoteView from './components/NoteView.js';
import EditNote from './components/EditView.js';

const AppContainer = styled.div`
  width:405px;
  margin:0 auto;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notesArr: [],
      setStorage: false,
    }
  }

  componentDidMount(){
    let storage = localStorage.getItem('notes');
    
    let setStorage = localStorage.getItem('setStorage');
    console.log(typeof null);
    if ( setStorage !== null ){
      this.setState({
        notesArr: JSON.parse(storage),
      })
    } else {
      this.setState({ notesArr: notes, setStorage: true });
      this.setToStorage();
    }
  }

  matchSelectNoteToArray = (it) => {
    let item = this.state.notesArr.find((note) => {
      return (it === note.id);
    })
    return item;
  }

  findNoteIndex = (noteId, arr) => {
    let index = arr.findIndex((el, i)=>{
      return el.id === noteId;
    })
    return index;
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

  handleEditNote = (note) => {
    let index = this.findNoteIndex(note.id, this.state.notesArr);
    let notes = this.state.notesArr.slice();
    notes[index] = note;
    this.setState({
      notesArr: notes,
    })
  }

  setToStorage = () => {
    localStorage.setItem('notes', JSON.stringify(this.state.notesArr));
    localStorage.setItem('setStorage', 'true');
  }

  render() {
    if(this.state.setStorage === true){
      this.setToStorage();
    }
    return (
      <AppContainer>
        <Route path="/addnote" render = { props => { return <NewNote handleNewNote={this.handleNewNote} notes={this.state.notesArr}/>}} />
        <Route path="/editnote/:id" render={(props) => { return <EditNote {...props} handleEditNote={this.handleEditNote} notes={this.state.notesArr} /> }} />
        <Route path="/noteView/:id" render={(props) => { return <NoteView {...props} allNotes={this.state.notesArr} delete={this.handleDeleteNote} edit={this.handleEditNote} /> }} />
        <Route exact path="/" render={props => { return <HeadCtrls notes={this.state.notesArr}/> }} />
        <Route exact path="/" render={props => { return <NoteList notes={this.state.notesArr} /> }} />
      </AppContainer>
    )
  }
}

export default App;
