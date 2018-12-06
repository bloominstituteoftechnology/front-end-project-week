import React from 'react';

class NotesForm extends React.Component {
  state = {
    title: '',
    textBody: '',
    tags: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addNote({
      id: Date.now().toString(),
      title: this.state.title,
      textBody: this.state.textBody,
      tags: this.state.tags.split(',')
    });

    this.setState({
      title: '',
      textBody: '',
      tags: '',
    })

    this.props.history.push('/');
  }

  render() {
    const {title, textBody, tags} = this.state
    return (
      <div className="form-container">
        <h3>Create New Note:</h3>
        <form action="submit" onSubmit={this.onSubmit}>
          <input type="text"
            onChange={this.onChange}
            placeholder="Add title"
            name="title"
            value={title}
          /><br/>
          <textarea type="text"
            onChange={this.onChange}
            placeholder="Add note"
            name="textBody"
            value={textBody}
          /><br/>
          <input type="text"
            onChange={this.onChange}
            placeholder="Add tags"
            name="tags"
            value={tags}
          /><br/>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default NotesForm