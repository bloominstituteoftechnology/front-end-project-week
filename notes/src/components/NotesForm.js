import React from 'react';

class NotesForm extends React.Component {
  state = {
    _id: '',
    title: '',
    textBody: '',
    tags: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  componentDidMount() {
    const { update, note } = this.props;
    
    update && this.setState({
      _id: note._id,
      title: note.title,
      textBody: note.textBody,
      tags: note.tags.join(',')
    })
  }


  onSubmit = e => {
    e.preventDefault();

    const { _id, title, textBody, tags } = this.state;
    const { update, updateNote, addNote, history } = this.props;

    const note = {
      title,
      textBody,
      tags: tags.split(',')
    };

    update ? updateNote(note, _id) : addNote(note);

    this.setState({
      title: '',
      textBody: '',
      tags: '',
    })

    history.push('/');
  }

  render() {
    const {title, textBody, tags} = this.state;
    const { update } = this.props;
    
    return (
      <div className="form-container">
        <h3>{update ? 'Update Note:' : 'Create New Note:'}</h3>
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
          <button type="submit">{update ? 'Update' : 'Save'}</button>
        </form>
      </div>
    )
  }
}

export default NotesForm