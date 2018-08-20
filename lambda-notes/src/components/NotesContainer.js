import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import NotesList from './NotesList';
import NotePage from './NotePage';
import dummyData from '../dummy-data';
import NewNote from './NewNote';

class NotesContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      title: "",
      content: ""
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData})
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewNote = (e) => {
    e.preventDefault();
    let copy = this.state.data.slice();
    copy.push({ id: this.state.data.length+1, title: this.state.title, content: this.state.content})
    console.log(copy);
    this.setState({ data: copy });
    //window.location.href = "http://localhost:3000/";
  }

  render() {
    return (
      <div className='notes-container'>
        <Sidebar />
      <div className='main-content'>
        <Route
            exact path="/"
            render={(props) => <NotesList {...props} data={this.state.data} />}
          />
          <Route
            exact path="/notes/:id"
            render={(props) => <NotePage {...props} data={this.state.data} />}
          />
        <Route
            path="/create-new-note"
            render={(props) => <NewNote {...props} handleChange={this.inputHandler} addNewNote={this.addNewNote} />}
          />
        {/* <Route path="/notes/:id/edit-note" component={Note} /> */}
        </div>
      </div>
    );
  }
}

export default NotesContainer;
