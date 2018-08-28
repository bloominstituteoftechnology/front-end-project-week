import React, { Component } from 'react';
import Route from 'react-router-dom';

import DeleteModal from './components/DeleteModal';
import CreateNewView from './components/CreateNewView';
import EditView from './components/EditView';
import NoteView from './components/NoteView';
import ListView from './components/ListView';
import SideBar from './components/SideBar';
import './App.css';

const notes = [
  {
    tags: 'Tuesday',
    title: 'bank',
    textBody: 'I need cash and quarters for laundry.', 
    id: 0,
  },
  {
    tags: ['Tuesday', 'Wednesday'],
    title: 'laundry',
    textBody: 'Do it late at night when no one else is trying to use the machines.',
    id: 1,
  },
  {
    tags: 'whenever',
    title: 'haircut',
    textBody: 'The Supercuts on Sunset & Gower.  Call first.',
    id: 2,
  },
  {
    tags: 'Thursday',
    title: 'cable bill',
    textBody: 'Pay online by Thursday.',
    id: 3,
  },
  {
    tags: 'Wednesday',
    title: 'dinner',
    textBody: "Dinner at my sister's house in Redondo Beach at 7pm.",
    id: 4,
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  clickHandler(url) {
    props.history.push(url);
  }

  render() {
    return (
      <div className="App">
        <Route
          path='/'
          component={SideBar}
        />
        <Route
          path='/notes'
          render={props => (
            <ListView 
              {...props} 
              notes={this.state.notes}
            />
          )}
        />
        <Route
          path={'/notes/:id'}
          render={props => (
            <NoteView
              {...props}
              notes={this.state.notes}
            />
          )}
        />
        <Route
          path={'/edit'}
          render={props => (
            <EditView
              {...props}
              notes={this.state.notes}
            />
          )}
        />
        <Route
          path={'/create'}
          render={props => (
            <CreateNewView
              {...props}
              notes={this.state.notes}
            />
          )}
        />
        <Route
          path={'/delete'}
          render={props => (
            <DeleteModal
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
