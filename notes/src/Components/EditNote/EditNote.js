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

    this.state={
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
        this.setState( () => ({ note: response.data, newTitle: response.data.title, newText: response.data.textBody }) )
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

    // Set temp variable to put data together
    let tempNote = Object.assign( {}, 
      this.state.note,
      {
        title: this.state.newTitle,
        textBody: this.state.newText
      }
    );

    // Set state
    this.setState( { note: tempNote } );

    // Send to axios
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, this.state.note )

    // Redirect to note display
    this.setState( {redirect: true});
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