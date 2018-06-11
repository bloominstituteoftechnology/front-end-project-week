import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

import './App.css';
import ListViewContainer from './containers/ListViewContainer/ListViewContainer';
import CreateNewViewContainer from './containers/CreateNewViewContainer/CreateNewViewContainer';
import NoteViewContainer from './containers/NoteViewContainer/NoteViewContainer';
import EditViewContainer from './containers/EditViewContainer/EditViewContainer';  
import DeleteModalContainer from './containers/DeleteModalContainer/DeleteModalContainer';

class App extends Component {
  state = {
    notes: [
      {
        id: 1,
        title: 'CARD title 1',
        message: 'MESSAGE 1 fasdfasdfasfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
      },
      {
        id: 2,
        title: 'CARD title 2',
        message: 'MESSAGE 2 asdfasdfasdfasdfasdfasdfaklsjdfasdfhajskdflasdfhaksdjfhalksdfhasdhfj',
      },
      {
        id: 3,
        title: 'CARD title 3',
        message: 'MESSAGE 3 asdfasdfasdfasdfasdfasdfaklsjdfasdfhajskdflasdfhaksdjfhalksdfhasdhfj',
      },
      {
        id: 4,
        title: 'CARD title 4',
        message: 'MESSAGE 4 asdfasdfasdfasdfasdfasdfaklsjdfasdfhajskdflasdfhaksdjfhalksdfhasdhfj',
      },
      {
        id: 5,
        title: 'CARD title 5',
        message: 'MESSAGE 5 asdfasdfasdfasdfasdfasdfaklsjdfasdfhajskdflasdfhaksdjfhalksdfhasdhfj',
      },
      {
        id: 6,
        title: 'CARD title 6',
        message: 'MESSAGE 6 asdfasdfasdfasdfasdfasdfaklsjdfasdfhajskdflasdfhaksdjfhalksdfhasdhfj',
      },
    ]
  };

  addNewNote = (e, title, message) => {
    e.preventDefault();
    const newNote = {
      id: this.state.notes.length + 1,
      title,
      message,
    }

    this.setState({
      notes: [...this.state.notes, newNote]
    })
  }

  render() {
    return (
      <div className="App container-fluid">
        <Route
          exact path="/"
          render={props => <ListViewContainer {...props} notes={this.state.notes} />}
        />
        <Route
          path="/create-new-note"
          render={props => <CreateNewViewContainer {...props} addNewNote={this.addNewNote} />}
        />
        <Route
          path="/view-note"
          render={props => <NoteViewContainer {...props} />}
        />
        <Route
          path="/edit-note"
          component={EditViewContainer}
          notes={this.state.notes} />
        <Route
          path="/delete-note"
          render={props => <DeleteModalContainer {...props} />} 
        />
      </div>
    );
  }
}

export default App; 
