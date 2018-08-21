import React, { Component } from 'react';


class EditNoteForm extends Component {
  state = {
    title: '',
    description: ''
  }

  handleOnChange = e => this.setState({[e.target.name]: e.target.value});

  handleEditNote = (e) => {
    e.preventDefault();
    let content = {
      id: parseInt(this.props.match.params.id, 10),
      title: this.state.title,
      description: this.state.description
    }
    this.props.editNote(content)
    this.setState({title: '', description: ''})
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.handleEditNote}>
          <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} />
          <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange} />
          <button type="submit">edit</button>
        </form>
      </div>
    );
  }
}

export default EditNoteForm;