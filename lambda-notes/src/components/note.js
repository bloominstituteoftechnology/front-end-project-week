import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {getNote, createNote, updateNote, deleteNoteOnState} from '../actions/index';
import Form from './form';

class Note extends Component {
  state = {
    title: '',
    content: '',
    id: '',
    editing: false,
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.getNote(id);
    console.log('noteses',this.props);
  }

  editNote = ({title, content, id}) => {
    this.setState(
      () => ({title, content, id, editing: true})
    )
  }

  handleEdit = () => {
    const { title, content, id} = this.state;
    console.log('Editing', {title,content,id})
    this.props.updateNote({title, content, id});
    this.setState({title: '', content: '', id: '', editing: false})
  }

  deleteNote = (id) => {
    console.log('something', this.props.notes);
    this.props.deleteNoteOnState(id);
  }

  render() {
    const {title, content, id, editing} = this.props.notes;
    return (
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{content}</p>
        </div>
        {/* <button onClick={() => this.deleteNote(note.id)}>Delete Note</button> */}
        <button onClick={() => <Router><Route path="/note/:id/form" component={Form} /></Router>}>Edit Note</button>

      </div>
    )
  }
}

// function NoteCard({note}) {
//   const { title, content } = note;
//   return (
//     <Link to={`note/${note.id}`}>
//       <div>
//         <h2>{title}</h2>
//       </div>
//       <div>
//         <p>{content}</p>
//       </div>
//     </Link>
//   )
// }

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

export default connect(mapStateToProps, {getNote, createNote, updateNote, deleteNoteOnState})(Note);