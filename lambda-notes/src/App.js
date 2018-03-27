import React, { Component } from 'react';

import ListNotes from './components/ListNotes/ListNotes';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import CreateNote from './components/CreateNote/CreateNote';
import ViewNote from './components/ViewNote/ViewNote';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { index: 0, title: 'Note Title', content: 'Content1' },
        {
          index: 1,
          title: 'Note Title',
          content:
            'Content2 asldjfk asdlkfjdf fjjffj fjf dkdkdkd d dkd dkdkeia allakd eiekdk aieikd kaiidkdid did dkieke e eid '
        },
        {
          index: 2,
          title: 'Note Title',
          content: 'aosdj aslfkjle llalkfjlasjf lkajsljelj elaj'
        },
        {
          index: 3,
          title: 'Note Title',
          content:
            'Content2 asldjfk asdlkfjdf fjjffj fjf dkdkdkd d dkd dkdkeia allakd eiekdk aieikd kaiidkdid did dkieke e eid '
        },
        {
          index: 4,
          title: 'Note Title',
          content:
            'Content2 asldjfk asdlkfjdf fjjffj fjf dkdkdkd d dkd dkdkeia allakd eiekdk aieikd kaiidkdid did dkieke e eid '
        },
        {
          index: 5,
          title: 'Note Title',
          content:
            'Content2 asldjfk asdlkfjdf fjjffj fjf dkdkdkd d dkd dkdkeia allakd eiekdk aieikd kaiidkdid did dkieke e eid '
        },
        {
          index: 6,
          title: 'Note Title',
          content:
            'Content2 asldjfk asdlkfjdf fjjffj fjf dkdkdkd d dkd dkdkeia allakd eiekdk aieikd kaiidkdid did dkieke e eid '
        },
        {
          index: 7,
          title: 'Note Title',
          content:
            'Content2 asldjfk asdlkfjdf fjjffj fjf dkdkdkd d dkd dkdkeia allakd eiekdk aieikd kaiidkdid did dkieke e eid '
        },
        {
          index: 8,
          title: 'Note Title',
          content:
            'Content2 asldjfk asdlkfjdf fjjffj fjf dkdkdkd d dkd dkdkeia allakd eiekdk aieikd kaiidkdid did dkieke e eid '
        }
      ]
    };
  }

  addNewNote = newNote => {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          index: this.state.notes.length,
          title: newNote.title,
          content: newNote.content
        }
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
        <Route path="/:id" render={() => <ViewNote />} />
        <Route
          path="/newNote"
          render={() => <CreateNote addNote={this.addNewNote} />}
        />
      </div>
    );
  }
}

export default App;
