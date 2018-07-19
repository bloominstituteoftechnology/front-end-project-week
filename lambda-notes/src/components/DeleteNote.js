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
        <div className='delete-text'>
          <p>Are you sure you want to delete this?</p>
        </div>
        <div className='delete-buttons'>
        <Link to='/'><button type='button' onClick={this.deleteComplete} className='delete-button'>Delete</button></Link>
        <Link to={`/note/${this.state.id}`}><button type='button' className='no-button'>No</button></Link>
        </div>
      </div>
      </div>
    )
  }
}

export default DeleteNote;
