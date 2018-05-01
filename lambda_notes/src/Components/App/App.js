import React, { Component, Fragment } from 'react';
import './App.css';

import Navigation from '../Navigation/Navigation';
import ListNotes from '../ListNotes/ListNotes';
import CreateNewNote from '../CreateNewNote/CreateNewNote';
import NoteView from '../NoteView/NoteView';
import EditNote from '../EditNote/EditNote';
import Login from '../Login/Login';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
    //   notes: [
    //     {
    //       title: 'The Phantom Menace',
    //       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    //       id: 0,
    //     },
    //     {
    //       title: 'Attack of the Clones',
    //       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    //       id: 1,
    //     },
    //     {
    //       title: 'Revenge of the Sith',
    //       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    //       id: 2,
    //     },
    //     {
    //       title: 'A New Hope',
    //       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    //       id: 3,
    //     },
    //     {
    //       title: 'The Empire Strikes Back',
    //       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    //       id: 4,
    //     },
    //     {
    //       title: 'Return of the Jedi',
    //       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    //       id: 5,
    //     },
    //     {
    //       title: 'The Force Awakens',
    //       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    //       id: 6,
    //     },
    //     {
    //       title: 'The Last Jedi',
    //       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    //       id: 7,
    //     },
    //     {
    //       title: 'Episode IX',
    //       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    //       id: 8,
    //     },
    //   ],
    // };
  }
  render() {
    return (
      <Fragment>
        <div className="appContainer">
          <div className="navCol">
            <Navigation notes={this.state.notes} />
          </div>
          <div className="listCol">
            <Route exact path="/" component={Login} />
            <Route
              exact
              path="/list"
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
