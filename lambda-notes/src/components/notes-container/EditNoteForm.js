import React, { Component } from 'react';


class EditNoteForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
    const id = this.props.match.params.id;
    props.fetchNote(id);
  }

  
  render() {
    if (!props.note) {
      return <div>Loading note information...</div>;
    }
    
    const { title, textBody} = props.note;
    return (
      <div className="NewForm">
        <form onSubmit={props.editNote}>
          <input
            type="text"
            onChange={props.handleInputChange}
            placeholder={title}
            value={props.editedTitle}
            name="editedTitle"
          />
          <input
            type="text"
            onChange={props.handleInputChange}
            placeholder={textBody}
            value={props.editedNote}
            name="editedNote"
          />
          <button type="submit">Save Edits</button>
        </form>
      </div>
    );
  }
}

export default EditNoteForm;


/*import axios from 'axios';
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
*/