import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import ListView from './components/NotesView/ListView';
import NewNote from './components/NotesView/NewNote';
import Note from './components/NotesView/Note';
import Edit from './components/NotesView/Edit';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 0,
          title: "A Note",
          text: "Some text."
        },
        { 
          id: 1,
          title: "Another Note",
          text: "More text."
        },
        {
          id: 2,
          title: "One More Note",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget mollis nisl. Etiam leo dui, dignissim vitae tellus a, aliquet ullamcorper nulla. Nam ultricies, erat et dignissim convallis, erat sapien mollis nisi, in consequat magna nulla vitae mauris. Vivamus pellentesque, neque at ullamcorper rutrum, urna mauris bibendum arcu, consequat luctus nisl lorem id diam. Vivamus quis dapibus sem. Maecenas in lectus odio. Sed semper finibus enim nec fermentum. Praesent aliquam eget sapien nec vulputate. Aliquam scelerisque est non lorem vestibulum, vitae maximus libero consectetur"
        }
      ],

      deleteModalToggle: false,
      selectedNoteID: null
    };
  }

  addNote = note => {
    let notes = this.state.notes.slice();
    notes.push(note);
    notes = notes.map((note, index) => ({...note, id: index}));
    this.setState({notes: notes});
  }

  updateNote = note => {
    let notes = this.state.notes.slice();
    notes[note.id] = {...note};
    this.setState({notes: notes});
  }

  deleteToggleHandler = e => {
    this.setState({deleteModalToggle: !this.state.deleteModalToggle, selectedNoteID: e});
  }

  deleteNote = id => {
    let notes = this.state.notes.slice();
    notes = notes.filter(note => note.id !== this.state.selectedNoteID);
    this.setState({notes: notes, deleteModalToggle: false});
  }

  render() {
    for(let i = 0; i < this.state.notes.length; i++) {
      console.log(this.state.notes[i].id);
    }

    return (
      <div className="App">
        <div className="container">
          <Sidebar />
          <div className="notes-view">
            <Route exact path="/" render={routeProps => <ListView {...routeProps} notes={this.state.notes} />} />
            <Route exact path="/new-note" render={routeProps => <NewNote {...routeProps} addNote={this.addNote}/>}/>
            <Route exact path="/:id" render={({match}) => <Note note={this.state.notes[match.params.id]} deleteNote={this.deleteToggleHandler} />}/>
            <Route exact path="/:id/edit" render={({match}) => <Edit id={match.params.id} updateNote={this.updateNote}/>}/>
          </div>
          
          <div className="delete-modal" style={this.state.deleteModalToggle ? {display:"block"} : {display: "none"}}>
            <div className="modal-box">
              <p>Are you sure you want to delete this?</p>
              <Link className="modal-delete-btn" to="/" onClick={this.deleteNote}>Delete</Link>
              <div className="modal-cancel-btn"onClick={this.deleteToggleHandler}>No</div>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
