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
      this.setState({title: this.props.title, textBody: this.props.textBody});
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody
    }
    this.props.addNote(newNote);
    this.props.history.push("/");
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Create New Note: </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Note Title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <input
          type="text"
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
