import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addNote } from './actions';
import NoteList from './components/NoteList';

class App extends Component {
  state = {
    title: '',
    message: ''
  }
  createNote = (event) => {
    event.preventDefault();
    this.props.addNote({
      titleValue: this.state.title,
      messageValue: this.state.message
    });
    this.setState({
      title: '',
      message: ''
    });
  };
  updateNote = (event) => {
    this.setState({
      title: event.target.value,
      message: event.target.value
    });
  };
  render() {
    console.log(this.state.notes);
    return (
      <div className="App container">
        <form onSubmit={this.createNote}>
          <input onChange={this.updateNote} type="text" placeholder="Note Title" value={this.state.title} />
          <textarea onChange={this.updateNote} placeholder="Note Message" value={this.state.message}></textarea>
        </form>
        <NoteList notes={this.props.notes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
};

export default connect(mapStateToProps, { addNote })(App);
