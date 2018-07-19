import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      id: null
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    let note = this.props.notes.filter(note => note.id === Number(id))
    this.props.handleSetCurrent(note[0]);
  }
  editCompleted = () => {
    this.props.handleEditNote(this.props.match.params.id)
  }
  render() {
    return (
      <div className='edit-page'>
        <h2>Edit Note:</h2>
        <form>
          <input name='title' value={this.props.currentNote.title} onChange={this.props.handleEditTitle}/>
          <textarea name='textBody' value={this.props.currentNote.textBody} onChange={this.props.handleEditTextBody}/>
        </form>
        <Link to={'/'}><button type='button' onClick={this.editCompleted}>Update</button></Link>
      </div>
    )
  }
}

export default EditNote;
