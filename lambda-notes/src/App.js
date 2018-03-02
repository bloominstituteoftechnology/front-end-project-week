import React, { Component } from 'react';
import uuid from 'uuid';

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
    })
  }
  updateNote = (event) => {

  }
  render() {
    console.log(this.state.notes);
    return (
      <div className="App container">

      </div>
    );
  }
}

export default App;
