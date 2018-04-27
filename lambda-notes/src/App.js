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
    const id = newNotes.length;
    const newNote = {id: id, title: title, body: body};
    newNotes.push(newNote);
    this.setState({
      notes: newNotes
    })
  }

  addUpdate = (title, body, id) => {
    if (id < 0) id = 0;
    const newNote = { id: id, title: title, body: body };
    const newNotes = this.state.notes;
    newNotes[id] = newNote;
    console.log(newNotes[id]);
    this.setState({ notes: newNotes });
  };

  delete = id => {
    let newNotes = this.state.notes;
    newNotes = newNotes.filter((note) => note.id !== id);
    this.setState({ notes: newNotes });
  }

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
              <Route path="/viewnote/:id" render={(props) => <ViewNote {...props} notes={this.state.notes} onDelete={this.delete} />}/>
              <Route path="/editnote/:id" render={(props) => <EditNote {...props} onSubmit={this.addUpdate} notes={this.state.notes}/>}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
