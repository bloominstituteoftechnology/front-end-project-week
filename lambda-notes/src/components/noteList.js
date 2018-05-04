import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {getNotes, createNote, updateNote, deleteNoteOnState} from '../actions/index';
// import axios from 'axios';

class NoteList extends Component {
  // constructor(){
  //   super()
  //   this.ids = 0;
  // }
    // state = {
    //   title: '',
    //   content: '',
    //   id: '',
    //   editing: false,
    // }
  

  componentDidMount(){
    this.props.getNotes();
    console.log('notes',this.props);
  }

  handleChange = (event) => {
    console.log('event!!!',event.target);
    this.setState( {[event.target.name]: event.target.value} )
  }

  // addNote = (e) => {
  //   e.preventDefault();
  //   const newNote = { 
  //       title: this.state.title,
  //       content: this.state.content,
  //       id: this.props.ids,
  //   }
  //   this.props.createNote(newNote);
  //   this.setState({title: '', content: ''});
  // }

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
    return (
      <div>
        {console.log('state',this.state)}
        {console.log('props notes',this.props.notes)}
        {/* List view */}
        {this.props.notes.map( (note) => {
          console.log("notesss",note.id)
          return(
            <div>
              <NoteCard note={note} />
            </div>
          )
        })}

          {/*creates form and edits form */}
        {/* <form>
          <input type='text' name='title' placeholder='Title' onChange={this.handleChange} value={this.state.title}/>
          <textarea name='content' rows="10" cols="30" placeholder='Content' onChange={this.handleChange} value={this.state.content}/>
          {this.state.editing 
            ? <button onClick={this.handleEdit}>Edit Note</button>
            : <button onClick={this.addNote}>Save</button>
          }
        </form> */}
      </div>
    )
  }
}

function NoteCard({note}) {
  const { title, content} = note;
  return (
    <Link to={`note/${note.id}`}>
      <div key={note.id}>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{content}</p>
        </div>
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