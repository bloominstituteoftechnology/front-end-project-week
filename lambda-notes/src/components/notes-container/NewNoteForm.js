import React from 'react';

const NewNoteForm = props => {

    return (
      <div className="NewForm">
        <form onSubmit={props.addNewNote}>
        <label htmlFor="title"/>
          <input
            type="text"
            onChange={props.handleInputChange}
            placeholder="Title"
            value={props.newTitle}
            name="newTitle"
          />
             <label htmlFor="content"/>
          <input
            type="text"
            onChange={props.handleInputChange}
            placeholder="Note"
            value={props.newNote}
            name="newNote"
          />
          <button type="submit">Add New Note</button>
        </form>
      </div>
    );
  }

  export default NewNoteForm 
/*
import axios from 'axios';

class NewNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote:'',
      newTitle:'',
    };
  }

  addNewNote = event => {
    event.preventDefault();
    axios     
    .post('https://fe-notes.herokuapp.com/note/create',  
    {
      title: this.state.newNote,
      textBody: this.state.newTitle,
    })

    .then(response => {
      console.log(response);
      console.log(response.data);
      this.setState(() => ({ 
        newNote:'',
        newTitle:'',
        }));
      })

    .catch(error => {
      console.error('Server Error', error);
    });
    }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };*/