import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NoteView from './components/NoteView';
import ListView from './components/ListView';
import SideBar from './components/SideBar';
import './App.css';
import './components/SideBar.css';

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
      note: ''
    };
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
      </div>
    );
  }
}

export default App;
