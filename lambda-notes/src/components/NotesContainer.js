import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData, addNewNote } from "../actions";

import Sidebar from './Sidebar';
import NotesList from './NotesList';
import NotePage from './NotePage';
import NewNote from './NewNote';

class NotesContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: ""
    }
  }

  componentDidMount() {
    this.props.fetchData();
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewNote = () => {
    this.props.addNewNote(this.state.title, this.state.content);
    this.setState({
      title: "",
      content: ""
    });
  };

  render() {
    return (
      <div className='notes-container'>
        <Sidebar />
      <div className='main-content'>
        <Route
          exact path="/"
          render={(props) => <NotesList {...props} data={this.props.data} />}
          />
        <Route
          path="/create-new-note"
          render={(props) => <NewNote {...props} handleChange={this.inputHandler} addNewNote={this.addNewNote} />}
          />
        <Route
          exact path="/notes/:id"
          render={(props) => <NotePage {...props}  />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.notes
  }
}

export default withRouter(
  connect(mapStateToProps, {
    fetchData,
    addNewNote
  })(NotesContainer)
);

