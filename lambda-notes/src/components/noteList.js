import React, { Component } from "react";
import {connect} from 'react-redux';
import {addNoteToState, editNoteOnState, deleteNoteOnState} from '../actions/index';
// import Note from './note';
// import axios from 'axios';

class NoteList extends Component {
  state = {
    value: '',
    title: '',
    content: '',
    id: '',
  }

  handleChange = (event) => {
    this.setState( {[event.target.value]: event.target.value} )
  }

  handleSubmit = () => {
    const note = { 
        value: this.state.value,
        id: this.props.todos.length,
    }
    this.props.addtodo(note);
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        {this.props.notes.map( (note, index) => {
          return <div key={index}>{note}</div>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {notes: state};
}

export default connect(mapStateToProps, {addNoteToState, editNoteOnState, deleteNoteOnState})(NoteList);