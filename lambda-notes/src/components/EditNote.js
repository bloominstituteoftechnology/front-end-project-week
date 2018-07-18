import React, { Component } from 'react';
import { Link } from 'react';

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      id: null
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    let note = this.props.note.filter(note => note.id === id);
    this.props.setCurrent(note[0]);
  }
  editCompleted = () => {
    this.props.handleEditNote(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        <h2>Edit Note:</h2>
        <form>
          <input name='title' value={this.props.currentNote.title} onChange={this.props.handleEditTitle}/>
          <input name='textBody' value={this.props.currentNote.textBody} onChange={this.props.handleEditText}/>
        </form>
        <Link to='/'><button type='button' onClick={this.editComplete}>Update</button></Link>
      </div>
    )
  }
}

export default EditNote;
