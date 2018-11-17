import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import NoteForm from './NoteForm';
import './EditNote.css';
/* EditNote/EditNote.js
 * Class used for editing a current note. I'd like to use a standard
 * form for both edit and create.
 */
class EditNote extends Component {
  constructor(props){
    super(props);

    this.state = {
      note: {},
      newTitle: "",
      newText: "",
      redirect: false
    };
  };

  /* Will need an axios call to pull the note data initially */
  componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
      .then( (response) => {
        this.setState( () => ({ note: response.data, newTitle: response.data.title, newText: response.data.textBody, redirect: false }) )
      })
      .catch( (error) => console.error(error) );
  };

  /* Need a handler for changing form fields */
  handleInput = (event) => {
    this.setState( {[event.target.name]: event.target.value} );
  };

  // Need a handler for submitting & updating through axios
  handleSubmit = (event) => {
    event.preventDefault();

    // Setting variable to avoid setting/updating axios through state.
    // Was having a major block using state.
    const newNote = Object.assign({}, this.state.note, {
      title: this.state.newTitle,
      textBody: this.state.newText
    });
    
    // Send to axios
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, newNote )
      .then( (response) => {
        this.setState( () => ({ note: response.data, newTitle: "", newText: "", redirect: true }) )
      })
      .catch( (error) => console.error(error));

    // Redirect to note display & reset fields
    // this.setState( (prevState) => ({
    //   note: newNote,
    //   redirect: true,
    //   newTitle: "",
    //   newText: ""
    // }) );
  };

  /* Send props:
  * -- handleInput: fn()
  * -- handleSubmit: fn()
  * -- title: ""
  * -- textBody: ""
  */
  render() {
    if ( this.state.redirect === true ) {
      return (<Redirect to={`/note/${this.state.note._id}`} />);
    }

    return (
      <div className="viewNote">
        <div className="viewNoteTitle">Edit Note:</div>
        <NoteForm 
          handleInput={this.handleInput} 
          handleSubmit={this.handleSubmit}
          title={this.state.newTitle}
          textBody={this.state.newText}
        />
      </div>
    );
  };
};


export default EditNote;