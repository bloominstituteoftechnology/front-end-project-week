import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import NoteList from './components/NoteList';
import {NewNote} from './components/NewNote';
import {EditNote} from './components/EditNote';
import { NoteView } from './components/NoteView';

class App extends Component {

  state = {
    notes: [{id:0, title: 'test', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'},{id:1, title: 'test1', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'},{id:2, title: 'test2', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'},{id:3, title: 'test3', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'}, {id:4, title: 'test4', text:'I dont know what to type so silm gjust going to tyoe a bunch of stuff who createSecureContext.'} ],
    nextId: 5
  }

  addNewNote = (note) => {
    note = {...note, id: this.state.nextId};
    const tempNotes = this.state.notes;
    tempNotes.push(note);
    this.setState({notes: tempNotes, nextId: (this.state.nextId + 1)});
  };

  updateNote = (note) => {
    const tempNotes = this.state.notes;
    for (let i = 0; i < tempNotes.length; i++) {
      if (tempNotes[i].id === parseInt(note.id)){
        if (note.title !== '')
          tempNotes[i].title = note.title;
        if (note.text !== '')
          tempNotes[i].text = note.text;
        
      }
    }
    this.setState({tempNotes});
  };

  deleteNote = (note) => {
    const tempNotes = this.state.notes;
    let index;
    for (let i = 0; i < tempNotes.length; i++) {
      if(tempNotes[i].id === note.id)
        index = i;
    }
    tempNotes.splice(index, 1);
    this.setState({tempNotes});

  };

  render() {
    console.log(this.state.notes);
    return (
      <div className="App">
        <div className='container'>
          <div className='row h-100'>
            <div className='col-3 left_side'>
              <h2 className='nav_head'>Lambda <br/>Notes</h2>
              <Link to='/' className='nav_button'>View Your Notes</Link>
              <Link to='/addNewNote' className='nav_button'>+Create New Notes</Link>
            </div>
            <Route exact path='/' render={() => <NoteList notes={this.state.notes}/> } />
            {/* <Route path='/noteview/:id' render={({match}) => <NoteView notes={this.state.notes} /> }/> */}
            {/* <Route path='/noteview/:id' render={({ match }) => noteView(this.state.notes, match) }/> */}
            <Route path='/noteview/:id' render={(props) => <NoteView {...props} deleteNote={this.deleteNote} notes={this.state.notes} /> }/>
            <Route path='/addNewNote' render={(props) =>  <NewNote {...props} addNewNote={this.addNewNote} />} />
            <Route path='/EditNote/:id' render={(props) => <EditNote {...props} updateNote={this.updateNote} notes={this.state.notes} />} />
          </div>
        </div>
      
      </div>

    );
  }
}

export default App;
