import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class DeletePopup extends Component {
    state = {
        notes: this.props.props.notes
    }
    render() {
    // console.log('this', this)
    // console.log('this.state before deleting note', this.state)
    // console.log('this.context ', this.context)
    // console.log('this.props', this.props)
    // console.log('this.props.props', this.props.props)
    // console.log('this.props.props.match', this.props.props.match)
    // console.log('this.props.props.match.params', this.props.props.match.params)
    // console.log('this.props.props.match.params.id', this.props.props.match.params.id)
    // console.log('this.props.props.notes', this.props.props.notes)
    console.log('this.props.props.history', this.props.props.history)
    const getNoteIndex = () => {
        for (let i = 0; i < this.state.notes.length; i++) {
            if (+this.props.props.match.params.id === this.state.notes[i].id) {
                // console.log('index in if statement: ', i)
                return i;
            }
        
        }
        // console.log('How is i defined here? ')
    }
    const noteDeleteHandler = (event) => {
        event.preventDefault();
        let deletedNote = this.state.notes.splice(getNoteIndex(), 1)
        // console.log('deletedNote: ', deletedNote);
        this.setState({notes: this.state.notes.filter(note => deletedNote.id !== note.id)})
        this.props.props.notes.filter(note => deletedNote.id !== note.id)
        this.props.props.history.push('/')
        // this.context.router.push('/')
        // console.log('this.state after deleting note', this.state)
        // console.log('this.props.props after deleting note', this.props.props)
    }
    return (
      <div className="popup">
        <div className="popup__inner">
        <div className="popup__msg"> Are you sure you want to delete this?</div>
          <div className="popup__btn-container">
            <NavLink to={`/`} className="popup__delete-btn" onClick={noteDeleteHandler}>Delete</NavLink> 
            {/* <NavLink to={`/`} className="popup__delete-btn" >Delete</NavLink>  */}
            <NavLink to={`/note/${this.props.props.match.params.id}/${this.props.props.match.params.title}/${this.props.props.match.params.body}`} className="popup__no-btn">No</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default DeletePopup;
