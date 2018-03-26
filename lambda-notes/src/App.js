import React, { Component } from 'react';

import ListNotes from './components/ListNotes/ListNotes';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import CreateNote from './components/CreateNote/CreateNote';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { title: 'Note Title', content: 'Content1' },
        {
          title: 'Note Title',
          content:
            'Content2 asldjfk asdlkfjdf fjjffj fjf dkdkdkd d dkd dkdkeia allakd eiekdk aieikd kaiidkdid did dkieke e eid '
        },
        {
          title: 'Note Title',
          content: 'aosdj aslfkjle llalkfjlasjf lkajsljelj elaj'
        }
      ]
    };
  }

  addNewNote = newNote => {
    this.setState({
      notes: [
        ...this.state.notes,
        { title: newNote.title, content: newNote.content }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route
          exact
          path="/"
          render={() => <ListNotes notes={this.state.notes} />}
        />
        <Route
          path="/newNote"
          render={() => <CreateNote addNote={this.addNewNote} />}
        />
      </div>
    );
  }
}

export default App;

// <ListNotes notes={this.state.notes}> </ListNotes>
//             withRouter(({ history }) => ())
