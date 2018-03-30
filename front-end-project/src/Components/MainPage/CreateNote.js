import React from 'react';
import './CreateNote.css';



class CreateNote extends React.Component {
  state = {
    title: '',
    content: '',
    idCounter:0,
  }

  render() {
    return (
      <div>
        <div className="top">Create New Note</div>
        <form className="note__form" onSubmit={this.addNewNote}>
          <input name="title" className="note__title" type="text" placeholder="Note Title" onChange={this.handleChange} value={this.state.title}/>
          <textarea name="content" className="note__content" cols="60" rows="10" type="text" placeholder="Note Content" onChange={this.handleChange} value={this.state.content}></textarea>
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
    newNote.id = this.state.idCounter;
    this.props.addNote(newNote);
    this.setState({title: '', content: '', idCounter: this.state.idCounter+1});
  }
}

export default CreateNote