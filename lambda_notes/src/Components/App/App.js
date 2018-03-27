import React, { Component, Fragment } from 'react';
import './App.css';

import Navigation from '../Navigation/Navigation';
import ListNotes from '../ListNotes/ListNotes';
import CreateNewNote from '../CreateNewNote/CreateNewNote';
import NoteView from '../NoteView/NoteView';
import EditNote from '../EditNote/EditNote';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: 'Note Title 1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
          id: 0
        },
        {
          title: 'Note Title 2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
          id: 1
        },
        {
          title: 'Note Title 3',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
          id: 2
        },
        {
          title: 'Note Title 4',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
          id: 3
        },
        {
          title: 'Note Title 5',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
          id: 4
        },
        {
          title: 'Note Title 6',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
          id: 5
        },
        {
          title: 'Note Title 7',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
          id: 6
        },
        {
          title: 'Note Title 8',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
          id: 7
        },
        {
          title: 'Note Title 9',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
          id: 8
        }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        <div className="appContainer">
          <div className="navCol">
            <Navigation />
          </div>
          <div className="listCol">
            <Route
              exact
              path="/"
              render={() => <ListNotes notes={this.state.notes} />}
            />
            <Route exact path="/add" component={CreateNewNote} />
            <Route exact path="/notes/:id" component={NoteView} />
            <Route exact path="/notes/:id/EditNote" component={EditNote} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
