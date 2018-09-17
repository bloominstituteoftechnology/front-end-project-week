import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import EditView from './components/EditView';
import DeleteModal from './components/DeleteModal';
import CreateNewView from './components/CreateNewView';
import NoteView from './components/NoteView';
import ListView from './components/ListView';
import SideBar from './components/SideBar';
import './App.css';
import './components/SideBar.css';
import './components/NoteView.css';
import './components/ListView.css';
import './components/DeleteModal.css';
import './components/CreateEditView.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: 'bank',
          textBody: 'I need cash and quarters for laundry.', 
          _id: 0,
        },
        {
          title: 'laundry',
          textBody: 'Do it late at night when no one else is trying to use the machines.',
          _id: 1,
        },
        {
          title: 'haircut',
          textBody: 'The Supercuts on Sunset & Gower.  Call first.',
          _id: 2,
        },
        {
          title: 'cable bill',
          textBody: 'Pay online by Thursday.',
          _id: 3,
        },
        {
          title: 'dinner',
          textBody: "Dinner at my sister's house in Redondo Beach at 7pm.",
          _id: 4,
        },
      ],
      title: '',
      textBody: '',
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewNote = (event) => {
    event.preventDefault();
    const notes = [
      ...this.state.notes,
      {
        _id: Date.now(),
        title: this.state.title,
        textBody: this.state.textBody,
      }
    ];
    this.setState({
      notes,
      title: '',
      textBody: '',
    });
  }

  editNote = (event, _id, push) => {
    event.preventDefault();
    const notes = this.state.notes.map(eachNote => {
      if(eachNote._id == _id) {
        if(this.state.title.length)eachNote.title = this.state.title;
        if(this.state.textBody.length)eachNote.textBody = this.state.textBody;
      }
      return eachNote;
    });
    this.setState({
      notes,
      title: '',
      textBody: '',
    });
    push('/')
  }

  deleteNote = (event, _id, push) => {
    event.preventDefault();
    const notes = this.state.notes.filter(eachNote => eachNote._id !== Number(_id));
    this.setState({ notes });
    push('/')
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <Route
          exact path='/'
          render={props => (
            <ListView 
              {...props} 
              notes={this.state.notes}
            />
          )}
        />
        <Route
          path='/notes/:_id'
          render={props => (
            <NoteView
              {...props}
              notes={this.state.notes}
            />
          )}
        />
        <Route
          path='/create'
          render={props => (
            <CreateNewView
              {...props}
              notes={this.state.notes}
              handleInputChange={this.handleInputChange}
              addNewNote={this.addNewNote}
              textBody={this.state.textBody}
              title={this.state.title}
            />
          )}
        />
        <Route
          path='/notes/:_id/delete'
          render={props => (
            <DeleteModal
              {...props}
              notes={this.state.notes}
              deleteNote={this.deleteNote}
            />
          )}
        />
        <Route
          path='/edit/:_id'
          render={props => (
            <EditView
              {...props}
              notes={this.state.notes}
              handleInputChange={this.handleInputChange}
              editNote={this.editNote}
              textBody={this.state.textBody}
              title={this.state.title}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
