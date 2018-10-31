import React from 'react';

import '../styles/Styles.css';


class AddEditNote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        title: "",
        textBody: "",
        tags: []
    }
  }

  addNote = event => {
    event.preventDefault();

    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody,
      tags: this.state.tags
    }

    this.props.postNote(newNote);

    this.setState({
      title: '',
      textBody: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='add-edit-note-form'>
        <h1>Create New Note:</h1>
        <form onSubmit={this.addNote}>
          <input onChange={this.handleInputChange} type="text" name="title" className="title" placeholder='Note Title'/>
          <br/>
          <textarea onChange={this.handleInputChange} className='textBody' name='textBody' placeholder="Note Content">
          </textarea>
          <br/>
          <button type="submit" className='button'>Save</button>
        </form>
      </div>
    );
  }
}

export default AddEditNote;