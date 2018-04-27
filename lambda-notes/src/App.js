import React, { Component } from 'react';
import './App.css';
import { NoteList } from './Components/ListView';
import { Route, Switch } from 'react-router-dom';
import { CreateNote } from './Components/NewNote';
import { ViewNote } from './Components/ViewNote';
import { EditNote } from './Components/EditNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentWillMount() {
    localStorage.getItem('notes') && this.setState({notes: JSON.parse(localStorage.getItem('notes'))});
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('notes', JSON.stringify(nextState.notes));
  }

  addNote = (title, body) => {
    const newNotes = this.state.notes;
    const id = newNotes.length + 1;
    const newNote = {id: id, title: title, body: body};
    newNotes.push(newNote);
    this.setState({
      notes: newNotes
    })
  }

  addUpdate = (title, body) => {
    const id = {note:id};
    const update = {title: title, body: body};
    const newNote = this.state.note;
    newNote.push(update);
    this.setState({
      note: newNote
    });
  };

  render() {
    return ( 
    <div className="App">
        <div className="Container">
          <div className="row">
            <div className="col-2 side">
              <h1>Lambda Notes</h1>
              <a href="/" className="links">View Your Notes</a>
              <a href="/createNewNote" className="links second">+Create New Note</a>
            </div>
            <Switch>
              <Route exact path="/" render={() => <NoteList Notes={this.state.notes} />}/>
              <Route path="/createNewNote" render={() => <CreateNote onSubmit={this.addNote} />}/>
              <Route path="/viewnote/:id" render={(props) => <ViewNote {...props} notes={this.state.notes} />}/>
              <Route path="/editnote" render={EditNote}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
