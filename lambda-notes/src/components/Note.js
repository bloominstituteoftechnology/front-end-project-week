import React from 'react';
import './Note.css';
import { Link, NavLink } from 'react-router-dom';
import Modal from './Modal';
// import UpdateNoteForm from './UpdateNoteForm';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes: [],
      show: false
    };


 }


  componentDidMount() {
    const id = Number(this.props.match.params._id);
    console.log(id)
    this.setState({ id: id, notes: this.props.notes });
  }

  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  filterNotes = note => {
    // console.log("inside filter notes:", note.id);
    // console.log("inside filter notes::", this.state.id)
    // console.log(note.title);
    if (note.id === this.state.id) {
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
            <button onClick = { this.showModal }>Delete Note</button>
            <Modal show = {this.state.show} 
            hideModal = { this.hideModal } 
            deleteNote = {this.props.deleteNote}
            id = {this.props.match.params._id}
            />
        <Link to={`/notes/update/${this.props.match.params._id}`}><button>Update Note</button></Link>
            
        </div>
    )
}
}



export default Note;