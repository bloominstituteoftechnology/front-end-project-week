
import React from 'react';
import {Link} from 'react-router-dom';
import './NewNoteForm.css';





const NewNoteForm = props => {


    // addNote = event => {
    //     event.preventDefault();
    //     const notes = this.state.notes.slice();
    //     notes.push({ text: this.state.note, title: this.state.title, id: Date.now() });
    //     this.setState({ notes, title: '', text: '' });
    //   }
 
    //   handleInputChange = event => {
    //     this.setState({[event.target.name]: event.target.value});
    //   }

    console.log(props);
    return (
      <div className="new-note">
        <h3 className="title">Create New Note:</h3>
        <form className="form" onSubmit={props.addNote}>
          <input className="note-title" onChange={props.handleInputChange} type="text" name="title" placeholder="Title" value={props.title} />
          <input className="note-text"  onChange={props.handleInputChange} type="textbody" name="text" placeholder="Note" value={props.text}/>
          <button>
            Add Note
          </button>
        </form>
      </div>
    );
};





export default NewNoteForm;



