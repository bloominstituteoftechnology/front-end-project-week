import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CreateNoteView from './components/CreateNoteView';
import EditNoteView from './components/EditNoteView';
import NoteView from './components/NoteView';
import NotesListView from './components/NotesListView';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      
    }
  }
  componentDidMount() {
    axios
      .get("http://localhost:3400/api/notes")
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }
  // componentDidUpdate() {
  //   axios
  //     .get("http://localhost:3400/api/notes")
  //     .then(response => this.setState({ notes: response.data }))
  //     .catch(error => console.log(error));
  // }

  updateNotes = updatedNote => {
    const updatedNotes = this.state.notes.map(note => {
      console.log("this is updateNoted before if",updatedNote);
      if (note.id === updatedNote.data.id) {
        console.log("this is updateNoted",updatedNote);
      
        return updatedNote.data;
      }
      return note;
    });
    this.setState({ notes: updatedNotes });
    
  };

  updateDeleted = targetID => {
    
    const updatedLists = this.state.notes.filter(note => {
      if (note.id === targetID) {
        return false;
      }
      return true;
    });
    this.setState({ notes: updatedLists });
  };

  addNewNotes = addedNote => {
    
    let newNotesList = [...this.state.notes, addedNote]
    this.setState({ notes: newNotesList });
  };

  render() {
    return (
      <div className="App">
     
      <Switch>
      <Route exact path='/' 
            render = {props =>
               <NotesListView {...props}    
                notes={this.state.notes}
                updateNotes={this.updateNotes}
                updateDeleted={this.updateDeleted}
              //  componentDidMount={this.componentDidMount}
                />} />
      <Route path='/note/create' 
          render = {props => 
            <CreateNoteView {...props}
              notes={this.state.notes}
              updateNotes={this.updateNotes}
              addNewNotes={this.addNewNotes} />} />
      <Route path='/note/get/:id' 
          render={props => 
            <NoteView {...props}
              notes={this.state.notes}
              updateNotes={this.updateNotes}
              updateDeleted={this.updateDeleted} />} />
      <Route path='/note/edit/:id' render = {props => <EditNoteView {...props} />} />
      </Switch>




      </div>
    );
  }
}

export default App;
