import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NoteList from './components/NoteList';
import {newNote} from './components/newNote';
import { noteView } from './components/noteView';

class App extends Component {

  state = {
    notes: [{id:0, title: 'test', text:'I dont know what to type so silm gjust going to tyoe a bunch of shit who createSecureContext.'},{id:1, title: 'test1', text:'aksjfbkdsjfbksjdbfjksdbfkjsdbfkj'},{id:2, title: 'test2', text:'aksjfbkdsjfbksjdbfjksdbfkjsdbfkj'},{id:3, title: 'test3', text:'aksjfbkdsjfbksjdbfjksdbfkjsdbfkj'}, {id:4, title: 'test4', text:'aksjfbkdsjfbksjdbfjksdbfkjsdbfkj'} ],
    nextId: 5
  }

  addNewNote = (note) => {
    note = {...note, id: this.state.nextId};
    const tempNotes = this.state.notes;
    tempNotes.push(note);
    this.setState({notes: tempNotes, nextId: ++this.state.nextId});
  };

  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='col-3 left_side'>
              <h2 className='nav_head'>Lambda <br/>Notes</h2>
              <a href='/' className='nav_button'>View Your Notes</a>
              <a href='/addNewNote' className='nav_button'>+Create New Notes</a>
            </div>
            <Route exact path='/' render={() => <NoteList notes={this.state.notes}/> } />
            {/* <Route path='/noteview/:id' render={({match}) => <NoteView notes={this.state.notes} /> }/> */}
            <Route path='/noteview/:id' render={({ match }) => noteView(this.state.notes, match) }/>
            <Route path='/addNewNote' render={() => newNote(this.addNewNote)} />
          </div>
        </div>
      
      </div>

    );
  }
}

export default App;
