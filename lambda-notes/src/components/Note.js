import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes:[]
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState(()=> ({id:Number(id), notes:this.props.notes}))
  }
  filterNotes = note => {
    if(this.state.id === note.id) {
      return (
        <div>
          <h2>{note.title}</h2>
          <p>{note.textBody}</p>
        </div>
      )
    }
  }
  render() {
    return (
      <div className='note-view'>
        <div className='edit-delete'>
          <Link to={`/edit/${this.state.id}`}><p>edit</p></Link>
          <Link to={`/note/${this.state.id}/delete`}><p>delete</p></Link>
        </div>
        <div className='text'>
          {this.props.notes.map(this.filterNotes)}
        </div>
      </div>
    )
  }
}

export default Note;
