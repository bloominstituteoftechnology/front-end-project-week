import React, { Component } from 'react';

import ListNotes from './components/ListNotes/ListNotes';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import CreateNote from './components/CreateNote/CreateNote';
import ViewNote from './components/ViewNote/ViewNote';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    const cachedHits = localStorage.getItem(this.props.user);

    if (!JSON.parse(cachedHits)) console.log('invalid json confirmed');

    if (cachedHits) {
      this.setState({ notes: JSON.parse(cachedHits) });
      return;
    } else {
      localStorage.setItem(this.props.user, this.state.notes);
    }
  }

  addNewNote = newNote => {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          index: this.state.notes.length,
          title: newNote.title,
          content: newNote.content,
          tags: newNote.tags
        }
      ]
    });

    localStorage.setItem(
      this.props.user,
      JSON.stringify([
        ...this.state.notes,
        {
          index: this.state.notes.length,
          title: newNote.title,
          content: newNote.content,
          tags: newNote.tags
        }
      ])
    );
  };

  updateNote = updatedNote => {
    let newNotes = this.state.notes;
    newNotes[updatedNote.index] = {
      index: updatedNote.index,
      title: updatedNote.title,
      content: updatedNote.content,
      tags: updatedNote.tags
    };
    this.setState({ notes: newNotes });
    localStorage.setItem(this.props.user, JSON.stringify(newNotes));
  };

  deleteNote = indexToDelete => {
    this.state.notes.splice(indexToDelete, 1);
    this.setState({
      notes: [...this.state.notes]
    });
    localStorage.setItem(this.props.user, JSON.stringify(this.state.notes));
  };

  reorder = notesArr => {
    this.setState({
      notes: notesArr
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          notes={this.state.notes}
          returnToLogin={this.props.returnToLogin}
        />
        <Route
          exact
          path="/"
          render={() => (
            <ListNotes
              name={this.props.user}
              notes={this.state.notes}
              reorder={this.reorder}
            />
          )}
        />
        <Route
          path="/viewNote/:id"
          render={() =>
            this.state.notes[this.props.location.pathname.split('/')[2]] ? (
              <ViewNote
                index={this.props.location.pathname.split('/')[2]}
                title={
                  this.state.notes[this.props.location.pathname.split('/')[2]]
                    .title
                }
                content={
                  this.state.notes[this.props.location.pathname.split('/')[2]]
                    .content
                }
                tags={
                  this.state.notes[this.props.location.pathname.split('/')[2]]
                    .tags
                }
                update={this.updateNote}
                delete={this.deleteNote}
              />
            ) : null
          }
        />
        <Route
          path="/newNote"
          render={() => <CreateNote addNote={this.addNewNote} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
