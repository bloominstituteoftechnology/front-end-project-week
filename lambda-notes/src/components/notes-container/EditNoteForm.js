import React, { Component } from 'react';
import axios from 'axios';

class EditNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note:null,
      editedNote:'',
      editedTitle:'',
    };
  }

  componentDidMount() {
    console.log(this.props)
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        console.log(response.data)
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  editNote = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios     
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`,  
    {
      title: this.state.editedNote,
      textBody: this.state.editedTitle,
    })

    .then(response => {
      this.setState(() => ({ notes: response.data }));
      })

    .catch(error => {
      console.error('Server Error', error);
    });
    }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (!this.state.note) {
      return <div>Loading note information...</div>;
    }
    
    const { title, textBody} = this.state.note;
    return (
      <div className="NewForm">
        <form onSubmit={this.editNote}>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder={title}
            value={this.state.editedTitle}
            name="editedTitle"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder={textBody}
            value={this.state.editedNote}
            name="editedNote"
          />
          <button type="submit">Save Edits</button>
        </form>
      </div>
    );
  }
}

export default EditNoteForm;


