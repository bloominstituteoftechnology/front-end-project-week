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
      storageSet: false,
    }
  }

  componentDidMount(){
    this.setState({notesArr: notes})
    // let storage = localStorage.getItem('notes');
    // let setStorage = localStorage.getItem('setStorage');

    // if(storage === 'undefined'){
    //   this.setState({ notesArr: notes });
    //   this.setToStorage(this.state.notesArr);
    // } else {
    //   console.log(storage);
    //   let storage = localStorage.getItem('notes');
    //   this.setState({
    //     notesArr: JSON.parse(storage),
    //   })
    // }
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

  // removes specified item ("id") from array and returns new array
  newArrByFilter = (arr, id) => {
    let sarr = arr.slice();
    return sarr.filter((elem)=>{
      return elem.id !== id
    })
  }

  handleDeleteNote = (del) => {
    let notes = this.state.notesArr.slice();
   let newArr = this.newArrByFilter(notes, del);
    this.setState({ notesArr: newArr});
    console.log(this.state.notesArr);
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

  setToStorage = (arr) => {
    console.log(this.state.notesArr);
    localStorage.clear();
    localStorage.setItem('notes', JSON.stringify(arr));
    localStorage.setItem('setStorage', 'true');
  }

  render() {

      // this.setToStorage(this.state.notesArr);
    
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
