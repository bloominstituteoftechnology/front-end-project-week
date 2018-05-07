import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNotes, createNote, updateNote, deleteNoteOnState} from '../actions/index';

class Note extends Component {
  // constructor(props){
  //   super(props)
  // }

  state = {
    title: '',
    content: '',
    id: '',
    editing: false,
  }

  componentDidMount(){
    
    this.props.getNote();
    console.log('notes',this.props.match);
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

  render(){
    return (
      <div key={note.id}>
        <ul>
          <li>{note.title}</li>
          <li>{note.content}</li>
          <button onClick={() => this.deleteNote(note.id)}>Delete Note</button>
          <button onClick={() => this.editNote(note)}>Edit Note</button> 
        </ul>
      </div>
    )
  }
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

export default connect(mapStateToProps, {getNotes, createNote, updateNote, deleteNoteOnState})(Note);