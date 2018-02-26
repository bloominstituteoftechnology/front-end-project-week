import React from 'react';
import './createnote.css';

class CreateNote extends React.Component {
  state = {
    title: '',
    content: '',
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addNewNote}>
          <input name="title" className="note__title" type="text" placeholder="Note Title" onChange={this.handleChange} value={this.state.title}/>
          <textarea name="content" cols="60" rows="10" type="text" placeholder="Note Content" onChange={this.handleChange} value={this.state.content}></textarea>
          <button className="note__button" type="submit">Save</button>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  addNewNote = (event) => {
    event.preventDefault();
    const newNote = Object.assign({}, this.state);
    this.props.addNote(newNote);
    this.setState({title: '', content: ''});
  }
}

export default CreateNote;