import React from 'react';
import './Note.css';
import { Link, NavLink } from 'react-router-dom';
// import UpdateNoteForm from './UpdateNoteForm';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes: []
    };


 }


  componentDidMount() {
    const id = this.props.match.params._id;
    console.log(id)
    this.setState({ id: id, notes: this.props.notes });
  }

  filterNotes = note => {
    if (note._id === this.state.id) {
      return (
        <div key={note.id}>
          <p className='single-note-title'>{note.title}</p>
          <p className='single-note-content'>{note.textBody}</p>
        </div>
      );
    }
  };



   render () {
    return (
        <div className = "Note">
         <div className="note-div">{this.state.notes.map(this.filterNotes)}</div>
            <Link exact to = "/"><button onClick = {(_id) => this.props.deleteNote(this.props.match.params._id)}>Delete Note</button></Link>
        <NavLink exact to={`/notes/update/${this.props.match.params._id}`}><button>Update Note</button></NavLink>
            
        </div>
    )
}
}



export default Note;