import React from 'react';

class NoteForm extends React.Component {
  constructor(){
    super();
    this.state = {
      title: '',
      textBody: '',
    }
  }

  componentDidMount(){
    if(this.props.editing){
      const note = this.props.getNote(this.props.match.params.id);
      this.setState({title: note.title, textBody: note.textBody});
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.props.editing){
      const updatedNote = {
        title: this.state.title,
        textBody: this.state.textBody,
        id: Number(this.props.match.params.id)
      };
      this.props.updateNote(updatedNote);
      this.props.history.push("/");
    }else{
      const newNote = {
        title: this.state.title,
        textBody: this.state.textBody
      }
      this.props.addNote(newNote);
      this.props.history.push("/");
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="note-form">
        <label htmlFor="title"><strong>Create New Note: </strong></label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Note Title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <textarea
          id="textBody"
          placeholder="Note Content"
          onChange={this.handleChange}
          name="textBody"
          value={this.state.textBody}
        />
        <button className="btn" type="submit">Save</button>
      </form>
    );
  }
}

export default NoteForm;
