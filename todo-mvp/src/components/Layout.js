import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import ListNotes from './ListNotes/ListNotes';
import CreateNote from './CreateNote/CreateNote';
import ViewNote from './ViewNote/ViewNote';

import dummyNotes from '../dummydata';

import './Layout.css';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      content: '',
      id: Number('')
    };
    this.createNote = this.createNote.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);
  }

  componentDidMount() {
    this.setState({ notes: dummyNotes });
  }

  createNote(event) {
    event.preventDefault();

    const note = {};
    note.title = this.state.title;
    note.content = this.state.content;
    note.id = this.state.notes.length + 1;

    this.setState({
      notes: [...this.state.notes, note],
      title: '',
      content: '',
      id: Number(''),
    });
  }

  updateTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  updateContent(event) {
    this.setState({
      content: event.target.value
    });
  }

  render() {
    return (
      <div className="Layout">
        <NavBar />
        <div>
          <Route
            exact
            path="/"
            render={() => <ListNotes notes={this.state.notes} />}
          />

          <Route 
          path="/create" 
          render={() => 
          <CreateNote
          updateTitle={this.updateTitle} 
          updateContent={this.updateContent} 
          createNote={this.createNote} 
          title={this.state.title} 
          content={this.state.content} />} 
          />

          <Route 
          path="/view/:id" 
          render={(props) => 
          <ViewNote 
          note={this.state.notes[props.match.params.id]} />} 
          />
        </div>
      </div>
    );
  }
}

export default Layout;
