import React, { Component } from "react";
import {connect} from 'react-redux';
import {addNoteToState, editNoteOnState, deleteNoteOnState} from '../actions/index';
// import Note from './note';
// import axios from 'axios';

class NoteList extends Component {
  state = {
    title: '',
    content: '',
    id: 0,
  }

  componentDidMount(){
    this.props.addNoteToState();
    console.log('notes',this.props.notes);
  }

  handleChange = (event) => {
    this.setState( {[event.target.name]: event.target.value} )
  }

  addNote = (e) => {
    e.preventDefault();
    const newNote = { 
        title: this.state.title,
        content: this.state.content,
        id: this.props.notes.length,
    }
    this.props.addNoteToState(newNote);
    this.setState({title: '', content: ''});
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        {console.log(this.props.notes)}
        <h1>{}</h1>
        {this.props.notes.map( (note, index) => {
          return(
            <div key={index}>
              <ul>
                <li>{note.title}</li>
                <li>{note.content}</li>
              </ul>
            </div>
          )
        })}

        <form>
          <input type='text' name='title' placeholder='Title' onChange={this.handleChange} value={this.state.title}/>
          <textarea name='content' rows="10" cols="30" placeholder='Content' onChange={this.handleChange} value={this.state.content}/>
          <button onClick={this.addNote}>Save</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetchingNotes: state.fetchingNotes,
    notesFetched: state.notesFetched,
    notes: state.notes,
  };
}

export default connect(mapStateToProps, {addNoteToState, editNoteOnState, deleteNoteOnState})(NoteList);