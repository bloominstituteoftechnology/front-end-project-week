import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
// import { v1 } from 'uuid';

class AddNote extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
    }
  }

  handleChange = e => {
    e.preventDefault();
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addNewNote = e => {
    e.preventDefault();
    let newNote = {
      title: this.state.title,
      content: this.state.content,
      // id: v1() // note: id is getting set by server code so this is not necessary
    }
    this.props.dispatch(addNote(newNote))
    this.setState({
      title: '',
      content: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.addNewNote}>
      <input type='text' value={this.state.title} name='title' onChange={this.handleChange} required/>
      <input type='text' value={this.state.content} name='content' onChange={this.handleChange} required/>
      <button type='submit'>Add note</button>
    </form>
  )
  }
};

export default connect()(AddNote);