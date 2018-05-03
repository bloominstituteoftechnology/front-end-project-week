import React, { Component } from "react";
import {connect} from 'react-redux';
import {getNotes, createNote, editNoteOnState, deleteNoteOnState} from '../actions/index';
// import Note from './note';
// import axios from 'axios';

class NoteList extends Component {
  // constructor(props){
  //   super(props)
    state = {
      title: '',
      content: '',
      id: '',
      editing: false,
    }
  // }
  

  componentDidMount(){
    this.props.getNotes();
    console.log('notes',this.props.match);
  }

  handleChange = (event) => {
    console.log('event!!!',event.target);
    this.setState( {[event.target.name]: event.target.value} )
  }

  addNote = (e) => {
    e.preventDefault();
    const newNote = { 
        title: this.state.title,
        content: this.state.content,
        id: this.props.notes.length,
    }
    this.props.createNote(newNote);
    this.setState({title: '', content: ''});
  }

  deleteNote = (id) => {
    console.log('something', this.props.notes);
    this.props.deleteNoteOnState(id);
  }

  editNote = ({title, content, id}) => {
    this.setState(
      () => ({title, content, id, editing: true})
    )
  };

  render() {
    return (
      <div>
        {console.log('state',this.state)}
        {console.log('props notes',this.props.notes)}
        <h1>{}</h1>
        {this.props.notes.map( (note) => {
          console.log('JOOOR',note);
          return(
            <div key={note.id}>
              <ul>
                <li>{note.title}</li>
                <li>{note.content}</li>
                <button onClick={() => this.deleteNote(note.id)}>Delete</button>
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

export default connect(mapStateToProps, {getNotes, createNote, editNoteOnState, deleteNoteOnState})(NoteList);