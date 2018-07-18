import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DeleteNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.handleSetCurrent(id);
  }
  deleteComplete = () => {
    this.props.handleDeleteNote(this.props.match.params.id)
  }
  render() {
    return (
      <div className='delete-background'>
        <div className='delete-alert'>
        <p>Are you sure you want to delete this?</p>
        <Link to='/'><button type='button' onClick={this.deleteComplete}>Delete</button></Link>
        <Link to={`/note/${this.state.id}`}><button type='button'>No</button></Link>
        </div>
      </div>
    )
  }
}

export default DeleteNote;
