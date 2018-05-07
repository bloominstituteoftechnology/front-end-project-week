import React, { Component } from "react";
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {getNotes, createNote, updateNote, deleteNoteOnState} from '../actions/index';
// import Note from './note';
// import axios from 'axios';

class NoteList extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: '',
      id: '',
      editing: false,
    }
  }

  componentDidMount(){
    this.setState({title: 'dd', content: 'ff'});
    
    this.props.getNotes();
    
    console.log('gnotes',this.state);
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

  handleEdit = () => {
    const { title, content, id} = this.state;
    console.log('Editing', {title,content,id})
    this.props.updateNote({title, content, id});
    this.setState({title: '', content: '', id: '', editing: false})
  } 

  render() {
    console.log('notes',this.props.notes);
    return (
      <div>
        {/* {console.log('state',this.state)}
        {console.log('props notes',this.props.notes)} */}
        {/* List view */}
        {this.props.notes.map( (note) => {
          console.log('JOOOR',note);
          <NoteCard key={note.id} note={note} />
        })}
          
      </div>
    )
  }
}

function NoteCard({note}) {
  const {title, content, id} = note;
  console.log('Notecard', id);
  return (
    <Link to={`/api/notes/${id}`}>
      <div>
        <h2>{title}</h2>
      </div>
    </Link>
  )
}

const mapStateToProps = state => {
  return {
    fetchingNotes: state.fetchingNotes,
    notesFetched: state.notesFetched,
    notesSaved: state.notesSaved,
    savingNotes: state.savingNotes,
    updatingNote: state.updatingNote,
    noteUpdated: state.noteUpdated,
    notes: state.notes,
  };
  
}

export default connect(mapStateToProps, {getNotes, createNote, updateNote, deleteNoteOnState})(NoteList);

{/*creates form and edits form */}
        {/* <form>
          <input type='text' name='title' placeholder='Title' onChange={this.handleChange} value={this.state.title}/>
          <textarea name='content' rows="10" cols="30" placeholder='Content' onChange={this.handleChange} value={this.state.content}/>
          {this.state.editing //should go in note.js
            ? <button onClick={this.handleEdit}>Edit Note</button>
            : <button onClick={this.addNote}>Save</button>
          }               editNote.js
        </form> */}
        {/* <ul>
                <li>{note.title}</li>
                <li>{note.content}</li>
                <button onClick={() => this.deleteNote(note.id)}>Delete Note</button>
                <button onClick={() => this.editNote(note)}>Edit Note</button> 
              </ul> */} 


