import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData, addNewNote, editNote } from "../actions";

import Sidebar from './Sidebar';
import NotesList from './NotesList';
import NotePage from './NotePage';
import NewNote from './NewNote';
import EditNote from './EditNote';

class NotesContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      searchTerm: "",
      currentlyDisplayed: []
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  getToken() {
    const token = localStorage.getItem('token');
    const requestOptions = {
        headers: {
            authorization: token
        }
      }
    return requestOptions;
  };

  componentDidMount() {
    const token = this.getToken();
    this.props.fetchData(token);
  }

  componentWillReceiveProps(props) {
    this.setState({ currentlyDisplayed: props.data });
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewNote = (e) => {
    e.preventDefault();
    const token = this.getToken();
    this.props.addNewNote(this.state.title, this.state.content, token);
  };

  editNote = (id) => {
    const token = this.getToken();
    this.props.editNote(this.state.title, this.state.content, id, token);
  }

  //searchbar input change handler
  onInputChange = (event) => {
    let newlyDisplayed = this.props.data.filter(note =>  
      note.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
      note.textBody.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({
      searchTerm: event.target.value,
      currentlyDisplayed: newlyDisplayed
    });
  }

  render() {
    return (
      <div className='notes-container'>
        <Sidebar />
      <div className='main-content'>
        <Route
          exact path="/notes"
          render={(props) => <NotesList
          {...props}
          data={this.state.currentlyDisplayed}
          onInputChange={this.onInputChange}
          searchTerm={this.state.searchTerm} />}
          />
        <Route
          path="/notes/create-new-note"
          render={(props) => <NewNote
          {...props}
          handleChange={this.inputHandler}
          addNewNote={this.addNewNote}
          addingNote={this.props.addingNote} />}
          />
        <Route
          exact path="/notes/:id"
          render={(props) => <NotePage
          {...props}
          getToken={this.getToken}  />}
          />
        <Route
          path="/notes/:id/edit-note"
          render={(props) => <EditNote
          {...props}
          handleChange={this.inputHandler}
          editNote={this.editNote}
          updatingNote={this.props.updatingNote} />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.notes,
    addingNote: state.addingNote,
    updatingNote: state.updatingNote
  }
}

export default withRouter(
  connect(mapStateToProps, {
    fetchData,
    addNewNote,
    editNote
  })(NotesContainer)
);

